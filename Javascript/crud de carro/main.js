// 1. Deve ser desenvolvido um programa que realize um CRUD de carros.
    // Os inputs devem ser feitos através do PROMPT do HTML. O
    // funcionamento deve ser o seguinte:
    // Ao abrir a página, o sistema deve apresentar a seguinte tela:

    // Bem-vindo ao sistema de CRUD de veículos:

    // No momento, o sistema tem X carros cadastrados

    // Escolha uma das opções para interagir com o sistema:

    // 1 - Cadastrar veículo
    // -> Ao entrar nesta opção o sistema deve pedir os seguintes
    // dados: modelo, marca, ano, cor e preco.
    // -> O veículo deve ser adicionado na lista de veículos que
    // armazena todos os veículos cadastrados
    // -> Todo veículo deve ter um identificador único. Este
    // identificador deve ser gerado de forma automática

    // 2 - Listar todos os veículos
    // -> Ao entrar nesta opção o sistema deve listar os veículos
    // com o seguinte layout:
    // ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
    // Preço: R$40.000
    // ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
    // Preço: R$40.000

    // 3 - Filtrar veículos por marca
    // -> Ao entrar nesta opção o sistema deve pedir para o
    // usuário digitar a marca que quer filtrar
    // -> Deve ser listado os veículos que forem da mesma marca
    // -> A lista deve ter o seguinte layout:
    // ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000
    // ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000

    // 4 - Atualizar veículo
    // -> Ao entrar nesta opção o sistema deve pedir para o
    // usuário digitar o IDENTIFICADOR do veículo
    // -> O Sistema deve verificar se o veículo existe ou não e
    // mostrar a seguinte mensagem caso o veículo não exista:
    // "Veículo, não encontrado. O usuário deve voltar para o menu
    // inicial depois"
    // -> Se o veículo existir, o sistema deve permitir que o usuário
    // atualize somente a cor e o preço.

    // 5 - Remover veículo
    // -> Ao entrar nesta opção o sistema deve pedir para o
    // usuário digitar o IDENTIFICADOR do veículo
    // -> O Sistema deve verificar se o veículo existe ou não e
    // mostrar a seguinte mensagem caso o veículo não exista:
    // "Veículo, não encontrado. O usuário deve voltar para o menu
    // inicial depois"
    // -> Se o veículo existir, o sistema deve remover o veículo

    // 6 - Sair do sistema

    // Regras:
    // - Os dados de um veículo são: identificador, modelo, marca,
    // ano, cor, preco

    // - A opção de filtro deve ser por marca e ordenada pelo preco
    // - A lista de veículos deve estar ordenada pelo preco.
    // - Só deve ser possível atualizar a cor e o preço do veículo.


    let carros = []

    alert('Bem-vindo ao sistema de CRUD de veículos:')
    alert(`No momento, o sistema tem ${carros.length} carros cadastrados`)
    
    function exibirOpcao() {
      const opcao = prompt("Escolha uma opção:");
    
      if (opcao === "1") cadastrarVeiculo()
      else if (opcao === "2") listarCarros()
      else if (opcao === "3") filtrarVeiculo()
      else if (opcao === "4") atualizarVeiculo()
      else if (opcao === "5") removerVeiculo()
      else if (opcao === "6"){
        alert("Saindo do sistema. Volte sempre!")
        return
      }
      else alert("Opção inválida")
    }
    exibirOpcao()
    
    
    function cadastrarVeiculo() {
            const modelo = prompt("Digite o modelo do veículo:").toUpperCase()
            const marca = prompt("Digite a marca do veículo:")
            const ano = prompt("Digite o ano do veículo:")
            const cor = prompt("Digite a cor do veículo:")
            const preco = prompt("Digite o preço do veículo:")
    
            const novoVeiculo = {
                id: Date.now(),
                modelo,
                marca,
                ano,
                cor,
                preco
            }
    
            carros.push(novoVeiculo)
            exibirOpcao()
        
    }
    

    function listarCarros() {
      carros.forEach((veiculo) => {
          const { id, modelo, marca, ano, cor, preco } = veiculo
          const infoVeiculo = `ID: ${id} | Modelo: ${modelo} | Marca: ${marca} | Ano: ${ano} | Cor: ${cor} | Preço: R$${preco} <br>`
          document.getElementById('resultado').innerHTML += infoVeiculo
      })
      
  }



  function atualizarVeiculo() {
    const identificador = prompt('Digite o ID do veículo a ser atualizado:')
    const veiculoIndex = carros.findIndex(veiculo => veiculo.id == identificador)

    if (veiculoIndex !== -1) {
        const novaCor = prompt('Digite a nova cor:')
        const novoPreco = prompt('Digite o novo preço:')

        carros[veiculoIndex].cor = novaCor
        carros[veiculoIndex].preco = novoPreco

        alert('Veículo atualizado com sucesso!')
    } else {
        alert('Veículo não encontrado.')
    }

    exibirOpcao()
}






function filtrarVeiculo() {
  const marcaFiltrar = prompt('Digite a marca para filtrar os veículos:')
  const veiculosFiltrados = carros.filter(veiculo => veiculo.marca.toLowerCase() === marcaFiltrar.toLowerCase())

  if (veiculosFiltrados.length > 0) {
      veiculosFiltrados.forEach(veiculo => {
          const { id, modelo, cor, preco } = veiculo;
          const infoVeiculo = `ID: ${id} | Modelo: ${modelo} | Cor: ${cor} | Preço: R$${preco} <br>`
          document.write(infoVeiculo)
      })
  } else {
      alert('Nenhum veículo encontrado para esta marca.')
  }
}

function removerVeiculo() {
  const identificador = prompt('Digite o ID do veículo a ser removido:')

  const veiculoIndex = carros.findIndex(veiculo => veiculo.id === idParaRemover)

  if (veiculoIndex !== -1) {
      carros.splice(veiculoIndex, 1)
      alert('Veículo removido com sucesso!')
  } else {
      alert('Veículo não encontrado.')
  }

  exibirOpcao()
}

