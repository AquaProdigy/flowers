<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Flower>
 */
class FlowerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "name" => fake()->name(),
            "description" => fake()->text(),
            "image_path" => 'jeena-paradies-FnqH9E5C2do-unsplash.jpg',
            "price" => fake()->randomFloat(2, max: 10000),
            "category_id" => Category::factory(),
        ];
    }
}
