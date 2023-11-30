function alterarTexto() {
    let nome = prompt("Digite o seu nome:");
    if (nome) {
      document.getElementById("result").innerText = `E aí ${nome} ! Você está deixando o seu site dinâmico.`
    }
  }

  let contagem = 0
  const contador = document.querySelector("#contador")
  const textoContador = document.querySelector("#zerar")

function incrementar(){
    contagem += 1
    textoContador.innerText = `O contador está com ${contagem} cliques!`
    contador.innerText = contagem
}

function zerarContador(){
    contagem = 0
    textoContador.innerText = ''
}