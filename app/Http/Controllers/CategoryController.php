<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Flower;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::with('flowers')->get();
        return response()->json($categories, 200);
    }
}
