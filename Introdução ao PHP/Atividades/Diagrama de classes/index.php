<?php

 class pedido {

    
}




//  4. Chegou a hora de mostrar o quanto você sabe colocar no papel (ou
// code) o que pensa. Você deve pensar, modelar, programar e testar
// um modelo de classes baseado em uma situação da vida real. Ex:
// Locação de livros, restaurante

class livro {
    private $titulo;
    private $autor;
    private $disponivel;

    public function __construct($titulo, $autor) {
        $this->titulo = $titulo;
        $this->autor = $autor;
    }

    public function emprestar() {
        if ($this->disponivel) {
            $this->disponivel = false;
            echo "Livro '{$this->titulo}' emprestado com sucesso. <br>";
        } else {
            echo "Esse livro já está emprestado. <br>";
        }
    }

    public function devolver() {
        $this->disponivel = true;
        echo "Livro '{$this->titulo}' devolvido. <br>";
    }

}

$livro1 = new livro('Homem Aranha', 'Autor');
$livro2 = new livro('', '');

$livro1->emprestar();
$livro2->emprestar();
$livro1->devolver();

?>