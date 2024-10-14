<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderItems extends Model
{
    use HasFactory;
    protected $guarded = false;

    public function flowers()
    {
        return $this->belongsTo(Flower::class, 'flower_id');
    }
}
