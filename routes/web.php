<?php

use App\Http\Controllers\Admin\MainController;
use App\Http\Controllers\ProfileController;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Request;
use Illuminate\Http\Request as HttpRequest;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function (HttpRequest $request) {
    $categories = (new \App\Http\Controllers\CategoryController())->index()->getData();
    $cart = null;
//    dd(\App\Models\User::find($request->user()->id)->cart_items->get());

    if ($request->user()){
        $cart = User::find($request->user()->id)->cart_items->count();
    }

    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'categories' => $categories,
        'cart' => $cart,
    ]);
})->name('home');






Route::middleware(['auth', 'admin'])
    ->prefix('admin')
    ->group(function () {
        Route::get('/', [MainController::class, 'index'])->name('admin.index');
        Route::resource('categories', \App\Http\Controllers\Admin\CategoryController::class);
        Route::resource('products', \App\Http\Controllers\Admin\ProductController::class);
        Route::resource('orders', \App\Http\Controllers\Admin\OrderController::class, [
            'names' => [
                'index' => 'admin.orders.index',
                'show' => 'admin.orders.show',
                'edit' => 'admin.orders.edit',
                'update' => 'admin.orders.update',
                'store' => 'admin.orders.store',
                'destroy' => 'admin.orders.destroy',
            ]
        ]);
        Route::resource('users', \App\Http\Controllers\Admin\UserController::class);

    });







Route::get('/flower/{id}', [\App\Http\Controllers\FlowerController::class, 'show'])->name('flowers.show');
Route::post('/cart/{id}', [\App\Http\Controllers\CartController::class, 'store'])->middleware(['auth', 'verified'])->name('carts.store');
Route::patch('/cart/{id}', [\App\Http\Controllers\CartController::class, 'update'])->middleware(['auth', 'verified'])->name('carts.update');
Route::get('/cart/{id}', [\App\Http\Controllers\CartController::class, 'show'])->middleware(['auth', 'verified'])->name('carts.show');
Route::delete('/cart/{id}', [\App\Http\Controllers\CartController::class, 'destroy'])->middleware(['auth', 'verified'])->name('carts.destroy');

Route::post('/payment', [\App\Http\Controllers\PaymentController::class, 'create'])->middleware(['auth', 'verified'])->name('payment.create');

Route::get('/orders', [\App\Http\Controllers\OrderController::class, 'index'])->middleware(['auth', 'verified'])->name('orders.index');
Route::get('/payment/status', [\App\Http\Controllers\TransactionController::class, 'index'])->middleware('auth');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
