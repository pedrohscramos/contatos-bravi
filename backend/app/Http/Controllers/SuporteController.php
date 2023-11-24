<?php

namespace App\Http\Controllers;
use App\Helpers\ColchetesValidator;

use Illuminate\Http\Request;

class SuporteController extends Controller
{
    public function index()
    {
        return view('verificar_colchetes');
    }

    public function verificarColchetes(Request $request)
    {
        $entrada = $request->input('texto');
        $resultado = ColchetesValidator::verificaOrdemColchetes($entrada);

        return view('verificar_colchetes', ['resultado' => $resultado, 'entrada' => $entrada]);
    }
}