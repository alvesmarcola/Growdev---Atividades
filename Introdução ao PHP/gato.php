<?php

class Gato extends Animal {
    public $nome;

    public function __construct ($nome, $tipo, $especie, $voa){
        $this->nome = $nome;

        parent::__construct($tipo, $especie);
    }

    public function miar(){
        echo 'miau';
    }

}


?>