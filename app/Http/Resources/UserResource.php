<?php

namespace App\Http\Resources;

use App\Models\Flower;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "name" => $this->name,
            "phone" => $this->phone,
            "email" => $this->email,
            "cart" => FlowerUserResource::collection($this->id)
        ];
    }
}
