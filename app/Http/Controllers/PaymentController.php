<?php

namespace App\Http\Controllers;

use App\Jobs\ProcessNewOrder;
use App\Models\Flower;
use App\Models\FlowerUser;
use App\Models\Order;
use App\Models\Transaction;
use App\PaymentStatus;
use App\Services\PaymentService;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use YooKassa\Model\Notification\NotificationEventType;
use YooKassa\Model\Notification\NotificationSucceeded;
use YooKassa\Model\Notification\NotificationWaitingForCapture;

class PaymentController
{



    public function callback(Request $request, PaymentService $paymentService)
    {
        $source = file_get_contents('php://input');
        $data = json_decode($source, true);

        $factory = new \YooKassa\Model\Notification\NotificationFactory();
        $notificationObject = $factory->factory($data);
        $responseObject = $notificationObject->getObject();

        $transaction = Transaction::where('payment_id', $responseObject->id)->firstOrFail();
        if ($notificationObject->getEvent() === NotificationEventType::PAYMENT_SUCCEEDED){
            Transaction::where('payment_id',$responseObject->id)->update(['status' => PaymentStatus::PAID]);

            dispatch(new ProcessNewOrder(
                "Получен новый подтвержденный ордер id: {$transaction->id}\n" .
                "Сумма: {$transaction->price}\n" .
                "Статус: {$transaction->status}\n" .
                "Создан: {$transaction->created_at}\n" .
                "Обновлен: {$transaction->updated_at}\n"
            ));
        }

        if ($notificationObject->getEvent() === NotificationEventType::PAYMENT_CANCELED){
            Transaction::where('payment_id',$responseObject->id)->update(['status' => PaymentStatus::CANCELLED]);

            dispatch(new ProcessNewOrder(
                "Получен новый подтвержденный ордер id: {$transaction->id}\n" .
                "Сумма: {$transaction->price}\n" .
                "Статус: {$transaction->status}\n" .
                "Создан: {$transaction->created_at}\n" .
                "Обновлен: {$transaction->updated_at}\n"
            ));
        }

        header('HTTP/1.1 200 ');
        exit();
    }


    public function create(Request $request, PaymentService $paymentService)
    {

        $address = json_encode($request->all());

        if (!auth()->check()){
            abort(403);
        }

        try {
            DB::beginTransaction();

            $flowers = FlowerUser::where('user_id', auth()->id())->with('flowers')->get()->toArray();

            $total_price = 0;
            $arrayForOrder = [];

            foreach ($flowers as $cart){
                $total_price += (int) $cart['flowers']['price'];
                $arrayForOrder[] = [
                    'quantity' => $cart['quantity'],
                    'flower_id' => $cart['flowers']['id'],
                ];

                $fl = Flower::find(1);
                $fl->update([
                    'quantity' => $fl->quantity - $cart['quantity'],
                ]);

            }

            $order = Order::create([
                'user_id' => auth()->id(),
                'total_price' => $total_price,
                'address' => $address
            ]);


            $order->orderItems()->createMany($arrayForOrder);
            $transaction = Transaction::create([
                'order_id' => $order->id,
                'status' => PaymentStatus::CREATED,
                'price' => $total_price,
            ]);

            FlowerUser::where('user_id', auth()->id())->delete();

            DB::commit();

        }catch (Exception $e){
            Log::error('PaymentController error(rollback): ' . $e->getMessage());
            DB::rollBack();
        }

        $createPayment = $paymentService
            ->setPayment(
                $total_price,
                $transaction->id,
                'RUB'
            );

        $paymentRedirectUrl = $createPayment->getConfirmation()->getConfirmationUrl();
        $paymentId = $createPayment->id;

        $transaction->update([
            'payment_id' => $paymentId,
        ]);


        return Inertia::location($paymentRedirectUrl);
    }
}
