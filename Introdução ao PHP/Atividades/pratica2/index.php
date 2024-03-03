<?php

class Contador{

    public $contador;

    public function zerar(){
        $this -> contador = 0;
    }

    public function incrementar(){
        $this -> contador ++;
        echo "valor do contador é: this -> contador";
    }

    public function valorContador(){
        return $this -> contador;
    }

}

$meuContador = new Contador;

$meuContador -> incrementar();
$meuContador -> incrementar();
$meuContador -> incrementar();

/* 2. Crie uma classe que modele uma bola:
a. Atributos
i. Cor
ii. Circunferência
iii. Material
b. Métodos
i. Trocar Cor
ii. Mostrar cor*/ 


    class Bola{
        public $cor;
        public $circunferencia;
        public $material;

        public function __construct($cor, $circunferencia, $material) {
            $this->cor = $cor;
            $this->circunferencia = $circunferencia;
            $this->material = $material;
        }

        public function trocarCor($novaCor) {
            $this->cor = $novaCor;
        }
    
        
        public function mostrarCor() {
            return $this->cor;
        }

    }

    $bola = new Bola("branco e verde", 50, "couro sintético");
    echo "Cor bola", $bola-> mostrarCor();

    $bola->trocarCor("azul");
    echo "Nova cor da bola: " . $bola->mostrarCor();

//     Crie uma classe para implementar uma conta corrente. A classe
// deve possuir os seguintes atributos:
// a. Número da conta
// b. Nome do correntista
// c. Saldo
// Os métodos são os seguintes:
// a) Alterar nome
// b) Deposito
// c) Saque

     class ContaCorrente{
        public $numeroConta;
        public $nomeCorrentista;
        public $saldo;

       public function __construct($numeroConta, $nomeCorrentista, $saldo) {
            $this-> numero_conta = $numeroConta;
            $this-> nome_correntista = $nomeCorrentista;
            $this-> saldo = $saldo;
       } 

       public function alteraNome($novoNome){
        $this->nomeCorrentista = $novoNome;
        }

        public function deposito($valor){
            $this->saldo += $valor;
        }

       public function saque($valor){
        if ($valor <= 0) {
            echo "O valor do saque deve ser maior que zero.";
        } elseif ($valor > $this->saldo) {
            echo "Saldo insuficiente para realizar o saque.";
        } else {
            $this->saldo -= $valor;
            echo "Saque de $valor realizado com sucesso.";
        }
       }

    }


//     4. Crie uma classe para representar uma Calculadora. Esta classe
// deve conter um atributo que servirá para armazenar o histórico das
// operações e seus respectivos resultados.
// a. Esta classe deve conter as operações de somar, multiplicar,
// dividir e diminuir.
// b. Esta classe deve iniciar com o histórico vazio
// c. Esta classe deve conter uma ação para visualizar o histórico.

    class calculudora{

        public $historico = [];

        public function somar($num1, $num2) {
            $resultado = $num1 + $num2;
            array_push($this -> $historico, "Soma $num1 + $num2 = $resultado");
            return $resultado;
        }
    
        public function multiplicar($num1, $num2) {
            $resultado = $num1 * $num2;
            array_push($this -> $historico, "Multiplicar $num1 * $num2 = $resultado");
            return $resultado;
        }
    
        public function dividir($num1, $num2) {
            if ($num2 == 0) {
                return "Erro: não dividir por zero";
            }
            $resultado = $num1 / $num2;
            array_push($this -> $historico, "Divisão $num1 / $num2 = $resultado");
            return $resultado;
        }
    
        public function diminuir($num1, $num2) {
            $resultado = $num1 - $num2;
            array_push($this -> $historico, "subtrção $num1 - $num2 = $resultado");
            return $resultado;
        }

        public function historico(){
            return $this -> $historico;
        }

        

    }

//     5. Faça um programa completo utilizando classes e métodos que:
// a. Possua uma classe chamada BombaCombustivel, com no
// mínimo esses atributos:
// i. tipoCombustivel.
// ii. valorLitro

// iii. quantidadeCombustivel
// b. Possua no mínimo esses métodos:
// i. abastecerPorValor() – método onde é informado o
// valor a ser abastecido e mostra a quantidade de litros
// que foi colocada no veículo
// ii. abastecerPorLitro() – método onde é informado a
// quantidade em litros de combustível e mostra o valor a
// ser pago pelo cliente.
// iii. alterarValor() – altera o valor do litro do combustível.
// iv. alterarCombustivel() – altera o tipo do combustível.
// v. alterarQuantidadeCombustivel() – altera a
// quantidade de combustível restante na bomba.

// OBS: Sempre que acontecer um abastecimento é necessário
// atualizar a quantidade de combustível total na bomba. Não deve ser
// possível abastecer se não tiver gasolina suficiente na bomba.

// 6. Implemente uma classe chamada Carro com as seguintes
// propriedades:
// a. Um veículo tem um certo consumo de combustível (medidos
// em km / litro) e uma certa quantidade de combustível no
// tanque.
// b. O consumo é especificado no construtor e o nível de
// combustível inicial é 0.
// c. Forneça um método andar() que simula o ato de dirigir o
// veículo por uma certa distância, reduzindo o nível de
// combustível no tanque de gasolina.

// d. Forneça um método obterGasolina(), que retorna o nível atual
// de combustível e forneça um método adicionarGasolina(),
// para abastecer o tanque.

?>