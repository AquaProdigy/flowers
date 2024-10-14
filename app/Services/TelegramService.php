<?php

namespace App\Services;

use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class TelegramService
{
    public function __construct(public string $api_key)
    {
    }

    public function sendNewOrder(string $message)
    {
        $url = "https://api.telegram.org/bot{$this->api_key}/sendMessage?chat_id=6343621928&text={$message}";
        $response = Http::get($url);

        if ($response->successful()) {
            Log::info("Telegram sent new order success: {$response->json()}");
            return $response->json();
        }
        Log::error("Telegram sent new order failed: {$response->json()}");
        return $response->json();
    }
}
