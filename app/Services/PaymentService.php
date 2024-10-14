<?php

namespace App\Services;

use YooKassa\Client;

class PaymentService
{
    public function getClient()
    {
        $client = new Client();
        return $client->setAuth(config('services.payment.payment_shop_id'), config('services.payment.payment_api_key'));
    }

    public function getShopInfo()
    {
        try {
            $response = $this->getClient()->me();
        } catch (\Exception $e) {
            $response = $e;
        }

        return $response;
    }

    public function setPayment(
        int $amount,
        int $orderNumber,
        string $currency = 'RUB',

    )
    {
        try {
            $idempotenceKey = uniqid('', true);

            $response = $this->getClient()->createPayment(
                [
                    'amount' => [
                        'value' => (string) $amount,
                        'currency' => $currency,
                    ],
                    'confirmation' => [
                        'type' => 'redirect',
                        'locale' => 'ru_RU',
                        'return_url' => route('orders.index'),
                    ],
                    'capture' => true,
                    'description' => 'Заказ: №' . $orderNumber,
                    'metadata' => [
                        'orderNumber' => $orderNumber
                    ],
                ],
                $idempotenceKey
            );

            //получаем confirmationUrl для дальнейшего редиректа
            $confirmationUrl = $response->getConfirmation()->getConfirmationUrl();
        } catch (\Exception $e) {
            $response = $e;
        }

        if (!empty($response)) {
            return $response;
        }

    }

}
