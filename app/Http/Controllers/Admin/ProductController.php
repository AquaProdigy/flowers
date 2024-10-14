<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Flower;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Flower::orderBy('updated_at', 'desc')->get()->map(function ($item) {
            return [
                'id' => $item->id,
                'name' => $item->name,
                'description' => $item->description,
                'image_path' => $item->image_path,
                'price' => $item->price,
                'quantity' => $item->quantity,
                'category' => [
                    'id' => Category::find($item->category_id)->id,
                    'name' => Category::find($item->category_id)->name,
                ],
                'updated_at' => $item->updated_at->format('Y-m-d H:i:s'),
                'deleted_at' => $item->deleted_at,
            ];
        });

        return Inertia::render('Admin/Product/Index', [
            'data' => $data
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::all();
        return Inertia::render('Admin/Product/Create', ['categories' => $categories]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'price' => 'required|integer|min:0',
            'quantity' => 'required|integer|min:0',
            'category_id' => 'required|integer|exists:categories,id',
            'image_path' => 'required|image|mimes:jpeg,png,jpg,gif,svg',
        ]);

        $path = $request->file('image_path')->store('images/flowers', 'public');

        Flower::create([
            'name' => $request->name,
            'description' => $request->description,
            'image_path' => $path,
            'quantity' => $request->quantity,
            'price' => $request->price,
            'category_id' => $request->category_id
        ]);

        return to_route('products.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Flower $flower)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Flower $product)
    {
        return Inertia::render('Admin/Product/Edit', ['flower' => $product]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Flower $product)
    {
        $product->update($request->validate([
            'name' => 'required',
            'description' => 'required',
            'quantity' => 'required|integer|min:0',
            'price' => 'required|integer|min:0',
        ]));
        return to_route('products.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Flower $product)
    {
        $product->delete();
        return to_route('products.index');
    }
}
