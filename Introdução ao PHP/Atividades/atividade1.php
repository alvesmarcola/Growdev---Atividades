<?php

function calcularMedia($nota1, $nota2){
    $media = ($nota1 + $nota2) / 2;
    
    $aprovado = $media >= 6 ? true : false;

    
    $resultado = array(
        "media" => $media,
        "aprovado" => $aprovado
    );
    return $resultado;
}
    
$media(7,5);
var_dump(resultado);

// Atividade 2

function mediaPonderada($notas){
    global $notas;
    $somaNotas = 0;
    $num = 0;

    foreach ($notas as $key =>$value){
        $somaNotas += $key*$value;
        $num ++;
    }

    $media = $somaNotas / $num;
    global $media;
}

$notas = array(
    9 => 6,
    8 => 7,
    6 => 8,
);

mediaPonderada($notas);
var_dump(mediaPonderada);

// Atividade 3



?>