<?php

// 1. Crie uma classe abstrata chamada Ingresso que possui um valor
// em reais e um método imprimeValor()
// a. crie uma classe Normal, que herda Ingresso..
// b. crie uma classe VIP, que herda Ingresso e possui um valor
// adicional. Altere o método imprimeValor para mostrar o valor
// do ingresso somado com o adicional.
// c. crie uma classe Camarote, que herda ingresso e possui um
// valor adicional. Altere o método imprimeValor para mostrar o
// valor do ingresso somado com o adicional.

    
abstract class ingresso {
    protected $valor;

    public function __construct($valor) {
        $this->valor = $valor;
    }

    abstract public function imprimeValor();
}

class normal extends ingresso {
    public function imprimeValor() {
        echo "Valor do ingresso normal: R$ {$this->valor}";
    }
}

class vip extends ingresso {
    private $adicional;

    public function __construct($valor, $adicional) {
        $this->valor = $valor;
        $this->adicional = $adicional;
    }

    public function imprimeValor() {
        $total = $this->valor + $this->adicional;
        echo "Valor do ingresso vip: R$ {$total}" . '<br>';
    }
}

class camarote extends ingresso {
    private $adicional;

    public function __construct($valor, $adicional) {
        $this-> valor = $valor;
        $this->adicional = $adicional;
    }

    public function imprimeValor() {
        $total = $this->valor + $this->adicional;
        echo "Valor do ingresso Camarote: R$ {$total}<br>";
    }
}

$ingressoCamarote = new Camarote(150, 50);
$ingressoCamarote->imprimeValor();

$ingressoNormal = new Normal(50);
$ingressoNormal->imprimeValor();
echo '<br>';

$ingressoVIP = new vip(100, 20);
$ingressoVIP->imprimeValor();
echo "<hr>";

// 2. Crie a classe Imovel, que possui um endereço e um preço.
// a. crie uma classe Novo, que herda Imovel e possui um adicional
// no preço. Crie métodos de acesso e impressão deste valor
// adicional.
// b. crie uma classe Velho, que herda Imovel e possui um desconto
// no preço. Crie métodos de acesso e impressão para este
// desconto.

class Imovel {
    public $endereco;
    public $preco;

    public function __construct($endereco, $preco) {
        $this->endereco = $endereco;
        $this->preco = $preco;
    }

    public function getPreco() {
        return $this->preco;
    }

    public function precoFinal() {
        return $this->preco;
    }
}

class Novo extends Imovel {
    private $adicionalPreco;

    public function __construct($endereco, $preco, $adicionalPreco) {
        parent::__construct($endereco, $preco);
        $this->adicionalPreco = $adicionalPreco;
    }

    public function precoFinal() {
        return $this->preco + $this->adicionalPreco;
    }

    public function getAdicionalPreco() {
        return $this->adicionalPreco;
    }
}

class Velho extends Imovel {
    private $descontoPreco;

    public function __construct($endereco, $preco, $descontoPreco) {
        parent::__construct($endereco, $preco);
        $this->descontoPreco = $descontoPreco;
    }

    public function precoFinalDesconto() {
        return $this->preco - $this->descontoPreco;
    }

    public function getDescontoPreco() {
        return $this->descontoPreco;
    }
}

$novo = new Novo("Rua Growdev, 215", 100000, 5000);
echo "Endereço do imóvel novo: " . $novo->endereco . "<br>";
echo "Preço do imóvel novo: R$ " . $novo->preco . "<br>";
echo "Valor adicional do imóvel: R$ " . $novo->getAdicionalPreco() . "<br>";
echo "Preço do imóvel novo com adicional: R$ " . $novo->precoFinal() . "<br>";
echo "<hr>";

$velho = new Velho("Rua Grow, 777", 50000, 8000);
echo "Endereço do imóvel velho: " . $velho->endereco . "<br>";
echo "Preço do imóvel velho: R$ " . $velho->preco . "<br>";
echo "Valor de desconto do imóvel: R$ " . $velho->getDescontoPreco() . "<br>";
echo "Preço do imóvel velho com desconto: R$ " . $velho->precoFinalDesconto() . "<hr>";

// 3. Dado o seguinte diagrama:

// Identifique os atributos e comportamentos que são comuns entre os
// 3 animais e encapsule-os na superclasse Animal. Crie pelo menos 1
// comportamento diferente para cada animal.


class Animal {
    public $nome;

    public function __construct($nome) {
        $this->nome = $nome;
    }

    public function caminhar(){
        return "O animal caminha";
    }
}

class cavalo extends Animal {
    private $coice;

    public function __construct($nome, $coice,) {
        parent::__construct($nome);
        $this->coice = $coice;
    }

    public function coice() {
        return "O cavalo pode dar um coice.";
    }
}

class gato extends Animal {
    private $arranhar;

    public function __construct($nome, $arranhar) {
        parent::__construct($nome);
        $this->arranhar = $arranhar;
    }

    public function arranhar() {
        return "O gato arranha.";
    }
}

class cachorro extends Animal {
    private $latir;

    public function __construct($nome, $latir) {
        parent::__construct($nome);
        $this->latir = $latir;
    }

    public function arranhar() {
        return "O cachorro late.";
    }
}


 
?>