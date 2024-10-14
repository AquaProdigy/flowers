<?php

namespace App\Jobs;

use App\Services\TelegramService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Http;

class ProcessNewOrder implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    public function __construct(public string $message)
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $telegram_bot = new TelegramService(Config::get('services.telegram.telegram_bot_api_key'));
        $telegram_bot->sendNewOrder($this->message);
    }
}
