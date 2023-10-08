<?php

use App\Models\Report;
use App\Http\Controllers\RestApi\V1\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/test', function () {
    return response()->json([
        'message' => 'Hello World!',
    ]);
});

Route::get('/reports', function() {
    return Report::all();
});

Route::get('/user/{id}', [UserController::class, 'show']);
