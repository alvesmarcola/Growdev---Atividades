
  document.addEventListener('DOMContentLoaded', function() {

    // Seleciona todos os elementos com a classe .card
    var cells = document.querySelectorAll('.card')

    // Para cada cartão (cada elemento .card)...
    cells.forEach(function(cell) {

      // Adiciona um listener de evento de clique para expandir
      cell.querySelector('.js-expander').addEventListener('click', function() {
        var thisCell = this.closest('.card') // Seleciona o cartão clicado

        // Se o cartão clicado não estiver expandido, expande-o
        if (!thisCell.classList.contains('is-expanded')) {
          // Fecha todos os cartões abertos
          cells.forEach(function(cell) {
            cell.classList.remove('is-expanded')
            cell.classList.add('is-collapsed', 'is-inactive')
          });

          // Abre o cartão clicado
          thisCell.classList.remove('is-collapsed', 'is-inactive')
          thisCell.classList.add('is-expanded')
        } else {
          // Se o cartão clicado já estiver expandido, fecha-o
          thisCell.classList.remove('is-expanded')
          thisCell.classList.add('is-collapsed', 'is-inactive')
        }
      })

      // Adiciona um listener de evento de clique para recolher
      cell.querySelector('.js-collapser').addEventListener('click', function() {
        var thisCell = this.closest('.card'); // Seleciona o cartão clicado

        // Recolhe o cartão clicado
        thisCell.classList.remove('is-expanded')
        thisCell.classList.add('is-collapsed', 'is-inactive')
      })
    })
  })

