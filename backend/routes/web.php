<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SuporteController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/check-colchetes', [SuporteController::class, 'index']);
Route::post('/check-colchetes', [SuporteController::class, 'verificarColchetes']);


