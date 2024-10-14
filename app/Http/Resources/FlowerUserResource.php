<?php

namespace App\Http\Resources;

use App\Models\Flower;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FlowerUserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "user_id" => $this->user_id,
            "flowers_id" => $this->flowers_id,
            "quantity" => $this->quantity,
        ];
    }
}
