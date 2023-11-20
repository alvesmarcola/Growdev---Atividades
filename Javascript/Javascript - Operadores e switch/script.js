/*Se a média ficar entre 9 e 10 deve ser mostrado
no html a mensagem: Aprovado com nota
excelente

1. Se a média ficar entre 7 e 8 (não incluso) deve ser
mostrado no html a mensagem: Aprovado com
uma nota boa

1. Se a média ficar abaixo de 7 deve ser solicitado
uma outra nota que será a nota de recuperação. 

Se a nota de recuperação for maior que 6
deve ser mostrado a mensagem no html:
Aprovado na recuperação

1. Se a nota ficar abaixo de 6 deve ser
mostrado a mensagem no html:
Reprovado, estude e pratique mais.

*/

let nota1 = parseFloat(prompt("Digite a primeira nota: "));
let nota2 = parseFloat(prompt("Digite a segunda nota: "));
let nota3 = parseFloat(prompt("Digite a terceira nota: "));


let media = (nota1 + nota2 + nota3) /3;


if (media >= 9 && media <= 10) {
    document.getElementById('resultado').innerHTML = "<p class="Text">Aprovado com nota excelente</p>";
} else if (media >= 7 && media <= 8) {
    document.getElementById('resultado').innerHTML = "<p>Aprovado com uma nota boa</p>";
} else if (media < 7){
    alert("Tu pegou recuperação!")
    const notaRecuperacao = parseFloat(prompt("Informe sua nota de recuperação."));
        if (notaRecuperacao < 6) {
            document.getElementById('resultado').innerHTML = "Aprovado na recuperação";
        } else {
            document.getElementById('resultado').innerHTML = "Reprovado, estude e pratique mais.";
        }
}




/*
Criar uma algoritmo que mostre no html o nome do
mês de acordo com o número digitado pelo usuário

Exemplo:
Input: 4
Output: Abril

A opção default deve ser mostrado no html a
mensagem: Mês inválido, digite um valor de 1 a 12
*/

let mes = parseInt(prompt("Digite o número do mês que tu nasceu: "));

switch (mes) {
    case 1:
        document.getElementById('mes').innerHTML = "Janeiro";
        break;
        
    case 2:
        document.getElementById('mes').innerHTML = "Fevereiro";
        break;
        
    case 3:
        document.getElementById('mes').innerHTML = "Março";
        break;
        
    case 4:
        document.getElementById('mes').innerHTML = "Abril";
        break;
        
    case 5:
        document.getElementById('mes').innerHTML = "Maio";
        break;
        
    case 6:
        document.getElementById('mes').innerHTML = "Junho";
        break;
        
    case 7:
        document.getElementById('mes').innerHTML = "Julho";
        break;

    case 8:
        document.getElementById('mes').innerHTML = "Agosto";
        break;
        
    case 9:
        document.getElementById('mes').innerHTML = "Setembro";
        break;
        
    case 10:
        document.getElementById('mes').innerHTML = "Outubro";
        break;
        
    case 11:
        document.getElementById('mes').innerHTML = "Novembro";
        break;
        
    case 12:
        document.getElementById('mes').innerHTML = "Dezembro";
        break;
        
    default:
        document.getElementById('mes').innerHTML = "Mês inválido, digite um valor de 1 a 12";
        break;
}
