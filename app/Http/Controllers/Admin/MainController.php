<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Flower;
use App\Models\Order;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MainController extends Controller
{
    public function index()
    {
        $data = [
            'categories' => Category::all()->count(),
            'products' => Flower::all()->count(),
            'orders' => Order::all()->count(),
            'transactions' => Transaction::all()->count(),
            'users' => User::all()->count()
        ];
        return Inertia::render('Admin/Index', ['data' => $data]);
    }
}
