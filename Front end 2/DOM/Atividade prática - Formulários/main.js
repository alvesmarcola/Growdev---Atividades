

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault()
  
    
    const nome = document.getElementById('nome').value
    const endereco = document.getElementById('endereco').value
    const cidade = document.getElementById('cidade').value
    const estado = document.getElementById('estado').value
  
    // radio
    let cargoSelecionado;
    const cargos = document.getElementsByName('cargo')
    for (const cargo of cargos) {
      if (cargo.checked) {
        cargoSelecionado = cargo.value
        break
      }
    }
  
    // checkbox
    const interessesSelecionados = []
    const checkboxes = document.getElementsByName('interesse')
    for (const checkbox of checkboxes) {
      if (checkbox.checked) {
        interessesSelecionados.push(checkbox.value)
      }
    }
  
    // mini curriculo
    const miniCurriculo = document.getElementById('curriculo').value
  
    
    console.log(`
        Nome: ${nome}
        Endereço: ${endereco}
        Cidade: ${cidade}
        Estado: ${estado}
        Cargo Selecionado: ${cargoSelecionado}
        Interesses Selecionados: ${interessesSelecionados}
        Mini-Currículo: ${miniCurriculo}`)

  })
  