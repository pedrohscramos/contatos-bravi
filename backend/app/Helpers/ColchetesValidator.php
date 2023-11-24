<?php

namespace App\Helpers;

class ColchetesValidator
{
    public static function verificaOrdemColchetes($entrada)
    {
        $pilha = [];
        $mapeamento = [
            ')' => '(',
            '}' => '{',
            ']' => '['
        ];

        foreach (str_split($entrada) as $caractere) {
            if (in_array($caractere, array_keys($mapeamento))) {
                $topoElemento = array_pop($pilha);
                if ($mapeamento[$caractere] != $topoElemento) {
                    return false;
                }
            } else {
                array_push($pilha, $caractere);
            }
        }

        return empty($pilha);
    }
}