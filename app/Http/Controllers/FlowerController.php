<?php

namespace App\Http\Controllers;

use App\Models\Flower;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FlowerController extends Controller
{
    public function show(Request $request)
    {
        $flower = Flower::find($request->id);
        return Inertia::render('Flower/Show', ['card' => $flower]);
    }
}
