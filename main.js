document.addEventListener('DOMContentLoaded', function() {
  var cells = document.querySelectorAll('.card')

  cells.forEach(function(cell) {
    cell.querySelector('.js-expander').addEventListener('click', function() {
      var thisCell = this.closest('.card')

      if (!thisCell.classList.contains('is-expanded')) {
        cells.forEach(function(otherCell) {
          otherCell.classList.remove('is-expanded')
          otherCell.classList.add('is-collapsed')
        })

        thisCell.classList.add('is-expanded')
        thisCell.classList.remove('is-collapsed')
      } else {
        thisCell.classList.remove('is-expanded')
        thisCell.classList.add('is-collapsed')
      }
    })

    cell.querySelector('.js-collapser').addEventListener('click', function(event) {
      event.stopPropagation();
      var thisCell = this.closest('.card');

      thisCell.classList.remove('is-expanded');
      thisCell.classList.add('is-collapsed');
    })
  })
})
