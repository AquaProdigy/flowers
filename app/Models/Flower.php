<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Flower extends Model
{
    use HasFactory;
    protected $table = 'flowers';
    protected $guarded = false;

    protected function imagePath(): Attribute
    {
        return Attribute::make(
            get: fn (string $value) => asset('storage/' . $value),
        );
    }
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
