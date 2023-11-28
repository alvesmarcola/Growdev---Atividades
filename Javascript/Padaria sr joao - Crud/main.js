/*

Listar Todos os Produtos Disponíveis: O sistema deve ser capaz de exibir uma lista de todos os produtos disponíveis na padaria. 
João vai poder escolher no momento entre listagem simplificada, por ordem de preço, ou por ordem alfabética.

Adicionar um Novo Produto ao Catálogo: O sistema deve permitir que o usuário adicione um novo produto ao catálogo. 
O produto deve ser adicionado com um nome, preço e estoque.

Editar Produto do Catálogo: O sistema deve permitir que o usuário edite as informações de um produto existente no catálogo. Lembre-se que o estoque nunca pode ser menor que 0.

Remover um Produto do Catálogo: O sistema deve permitir que o usuário remova um produto do catálogo.

Receber Pedidos dos Clientes: O sistema deve permitir que os clientes façam pedidos. Um pedido deve conter um ou mais produtos e a quantidade desejada de cada um. 
O sistema deve armazenar um histórico de pedidos. 

Somar o valor do estoque: João deve poder somar o preço de venda do seu estoque

Relatório Diarios: João deve poder fazer um relatório das vendas que aconteceram em um período específico que ele selecionar. 
Deve conter quantas vendas foram realizadas e qual o faturamento.
*/

let produtos = [{}]

function exibirMenu(){
  alert('Escolha uma opção de interação com o sistema:')
  let opcao =prompt('1.Listar produtos; 2.Adicionar produtos; 3.Editar produto; 4. Remover Produto; 5. Fazer um pedido; 6.Somar valor de estoque; 7. Relatorio; 0. Sair')

  switch (opcao) {
    case '1':
      listarProdutos()
      break
    case '2':
      addProduto()
      break
    case '3':
      editarProduto()
      break
    case '4':
      removerProduto()
      break
    case '5':
      receberPedido()
      break
    case '6':
      valorEstoque()
      break
    case '7':
      relatoriosDiarios()
      break
    case '0':
      console.log('Saindo do sistema...')
      break
    default:
      console.log('Opção inválida.')
      break
  }
}
exibirMenu()

function listarProdutos (){
  let escolha = prompt('Deseja listar por listagem simplificada (1), por ordem de preço (2), ou por ordem alfabética (3)?')

  if (escolha === '1') {
    console.log('Lista de Produtos')
    produtos.forEach(produto => console.log(produto.nome))
  } else if (escolha === '2') {
    console.log('Lista de Produtos por Preço')
    produtos.sort((a, b) => a.preco - b.preco).forEach(produto => console.log(`${produto.nome} - R$ ${produto.preco}`))
  } else if (escolha === '3') {
    console.log('Lista de Produtos em Ordem Alfabética')
    produtos.sort((a, b) => a.nome.localeCompare(b.nome)).forEach(produto => console.log(produto.nome))
  } else {
    console.log('Opção inválida.')
  }
}


function addProduto() {
    const nome = prompt('Nome do produto:')
    const preco = parseFloat(prompt('Preço do produto:'))
    const estoque = parseInt(prompt('Quantidade em estoque:'))

    const novoProduto = {
        id: Date.now(),
        nome,
        preco,
        estoque
    }

    produtos.push(novoProduto)
    salvarProdutos()
  }



  function editarProduto() {
    const idProd = parseInt(prompt('ID do produto a ser editado:'))
  
    const indiceProduto = produtos.findIndex(produto => produto.id === idProd)
  
    if (indiceProduto !== -1) {
      let novoPreco = parseFloat(prompt('Novo preço do produto:'));
      let novoEstoque = parseInt(prompt('Nova quantidade em estoque:'));
  
      // verifica o estoque e n deixa ser menor q 0
      novoEstoque = novoEstoque < 0 ? 0 : novoEstoque
  
      produtos[indiceProduto].preco = novoPreco
      produtos[indiceProduto].estoque = novoEstoque
  
      console.log(`Produto "${produtos[indiceProduto].nome}" editado com sucesso.`)
      

      salvarProdutos()
    } else {
      console.log('Produto não encontrado.')
    }
  }
  


function removerProduto() {
  const idProduto = parseInt(prompt('ID do produto a ser removido:'))

  const iProduto = produtos.findIndex(produto => produto.id === idProduto)

  if (iProduto !== -1) {
    const produtoRemovido = produtos[iProduto].nome
    produtos.splice(iProduto, 1)
    console.log(`Produto "${produtoRemovido}" removido com sucesso!`)
    
    salvarProdutos()
  } else {
    console.log('Produto não encontrado!')
  }
}

let historicoVendas = [];

function receberPedido() {
  let continuar = true;
  const novoPedido = [];

  while (continuar) {
    const nomeProduto = prompt('Nome do produto:');
    const quantidade = parseInt(prompt('Quantidade desejada:'));

    const produtoEncontrado = produtos.find(prod => prod.nome === nomeProduto);

    if (produtoEncontrado) {
      novoPedido.push({ produto: produtoEncontrado, quantidade });
    } else {
      console.log('Produto não encontrado no catálogo.');
    }

    continuar = confirm('Deseja adicionar mais produtos?');
  }

  if (novoPedido.length > 0) {
    historicoVendas.push({ produtos: novoPedido, data: new Date() });
    console.log('Pedido registrado com sucesso!');
    salvarHistoricoVendas();
  } else {
    console.log('Pedido vazio. Não foi registrado.');
  }
}

function salvarHistoricoVendas() {
  localStorage.setItem('historicoVendas', JSON.stringify(historicoVendas));
}

function carregarHistoricoVendas() {
  const vendasSalvas = localStorage.getItem('historicoVendas');
  if (vendasSalvas) {
    historicoVendas = JSON.parse(vendasSalvas);
  }
}

carregarHistoricoVendas();




function valorEstoque (){
    let valorE = 0
    this.produtos.forEach(produto => {
        valorE += produto.preco * produto.estoque
    }) // acessar propriedade ou objeto
    return valorE
}

const valorTotalEstoque = valorEstoque()
console.log('O valor total do estoque é de:',valorTotalEstoque)


function relatoriosDiarios() {
  const dataInicio = prompt('Informe a data de início (DD/MM/AAAA):');
  const dataFim = prompt('Informe a data de fim (DD/MM/AAAA):');

  // Convertendo as datas fornecidas para objetos Date
  const inicio = new Date(dataInicio);
  const fim = new Date(dataFim);

  // Filtrando o histórico de vendas para o intervalo de datas fornecido
  const vendasNoPeriodo = historicoVendas.filter(venda => {
    const vendaData = new Date(venda.data);
    return vendaData >= inicio && vendaData <= fim;
  });

  // Número de vendas dentro do período
  const numeroVendas = vendasNoPeriodo.length;

  // Faturamento total dentro do período
  const faturamentoTotal = vendasNoPeriodo.reduce((total, venda) => {
    // Lógica para calcular o faturamento de cada venda e somar ao total
    return total + venda.produtos.reduce((subtotal, produto) => {
      return subtotal + (produto.produto.preco * produto.quantidade);
    }, 0);
  }, 0);

  console.log(`No período de ${dataInicio} a ${dataFim}:`);
  console.log(`- Foram realizadas ${numeroVendas} vendas.`);
  console.log(`- O faturamento total foi de R$ ${faturamentoTotal.toFixed(2)}.`);
}



function salvarProdutos() {
  localStorage.setItem('produtos', JSON.stringify(produtos))
}

function carregarProdutos() {
  const produtosSalvos = localStorage.getItem('produtos')
  if (produtosSalvos) {
    produtos = JSON.parse(produtosSalvos)
  }
}

carregarProdutos()