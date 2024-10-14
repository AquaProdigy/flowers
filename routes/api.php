<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/payment/callback', [\App\Http\Controllers\PaymentController::class, 'callback']);
