<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FlowerUser extends Model
{
    use HasFactory;
    protected $guarded = false;
    protected $table = 'flower_user';

    public function products()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
    public function flowers()
    {
        return $this->belongsTo(Flower::class, 'flower_id', 'id');
    }
}
