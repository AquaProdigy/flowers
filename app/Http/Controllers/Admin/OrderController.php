<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orders = Order::with(['user','transaction'])
            ->withCount(['orderItems'])
            ->orderBy('created_at', 'desc')
            ->get()
            ->map(function ($order) {
                return [
                    'id' => $order->id,
                    'user_id' => $order->user->id,
                    'name' => $order->user->name,
                    'total_price' => $order->total_price,
                    'address' => json_decode($order->address),
                    'status' => $order->transaction->status,
                    'created_at' => $order->created_at->format('Y-m-d H:i:s'),
                    'orderItems' => $order->order_items_count
                ];
            });
        return Inertia::render('Admin/Order/Index', ['orders' => $orders]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {

        $order = $order->load(['flowers']);
        $orderData = [
            'id' => $order->id,
            'user_id' => $order->user_id,
            'total_price' => $order->total_price,
            'status' => $order->transaction->status,
            'created_at' => $order->created_at->format('Y-m-d H:i:s'),
            'flowers' => $order->flowers->map(function ($flower) {
                return [
                    'name' => $flower->name,
                    'price' => $flower->price,
                    'description' => $flower->description,
                    'image_path' => $flower->image_path,
                ];
            }),
        ];
        return Inertia::render('Admin/Order/Show', ['order' => $orderData]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        //
    }
}
