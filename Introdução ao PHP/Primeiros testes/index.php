<?php

$listaCarros = array(); /**/

function cadastrarCarro($marca, $modelo){

    global $listaCarros;
    array_push($listaCarros, array (
        'marca' => $marca,
        'modelo' => $modelo
    ));
    var_dump ($listaCarros); 
}


cadastrarCarro('Gol G2', 'Astra');










?>