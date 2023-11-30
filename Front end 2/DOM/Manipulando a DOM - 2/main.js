

let cards = document.querySelectorAll('#container .card');

cards.forEach(function(card) {
    card.style.backgroundColor = 'rgba(224,111,36,255)';
  })

  let titles = document.querySelectorAll('.titulo-card');

  titles.forEach(function(title) {
      title.innerHTML = 'Meu card';
    })
  

    let description = document.querySelectorAll('.descricao-card');

  description.forEach(function(description) {
      description.style.color = 'white'
      description.style.marginTop = '25px'
      description.style.marginBottom = '25px'
      description.innerHTML = 'Descrição modificada por Javascript'
    })



  
    let btnEditar = document.querySelectorAll('.botao-editar');

  btnEditar.forEach(function(btnEditar) {
      btnEditar.style.backgroundColor = 'Green';
      btnEditar.style.borderRadius = '5px';
      btnEditar.style.border = 'none'
      btnEditar.style.padding = '5px';
      btnEditar.style.color = 'white';
      btnEditar.setAttribute('onclick', 'editarCard()')
    })

    let btnDeletar = document.querySelectorAll('.botao-apagar');

  btnDeletar.forEach(function(btnDeletar) {
      btnDeletar.style.backgroundColor = 'Red';
      btnDeletar.style.borderRadius = '5px';
      btnDeletar.style.border = 'none'
      btnDeletar.style.padding = '5px';
      btnDeletar.style.color = 'white';
      btnDeletar.setAttribute('onclick', 'apagarCard()')
    })


    function editarCard() {
        alert('Clicou em Editar!')
    }
    
    function apagarCard() {
        const confirmar = confirm('Você tem certeza?')
    
        if (confirmar === true) {
            alert('Confirmado!')
        } else {
            alert('Cancelou!')
        }
    }
