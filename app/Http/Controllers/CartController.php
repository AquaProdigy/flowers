<?php

namespace App\Http\Controllers;

use App\Http\Resources\FlowerResource;
use App\Http\Resources\FlowerUserResource;
use App\Models\Cart;
use App\Models\Flower;
use App\Models\FlowerUser;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */


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
        FlowerUser::create([
            'user_id' => $request->user()->id,
            'flower_id' => $request->id,
            'quantity' => 1,
        ]);
        return to_route('home');
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        if ($request->user()->id != $request->id) {
            abort(403);
        }

        $cart = User::find($request->user()->id)
            ->cart_items()
            ->with('flowers')
            ->get();
        return Inertia::render('Carts/Show', ['cart' => $cart]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cart $cart)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, FlowerUser $id)
    {
        $id->update([
            'quantity' => $request->quantity,
        ]);
        return response()->noContent();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $cart = FlowerUser::destroy($request->id);
        return redirect()->back();
    }
}
