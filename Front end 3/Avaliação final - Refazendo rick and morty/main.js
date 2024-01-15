const inputPesquisa = document.getElementById('pesquisa')
const charactersPerPage = 6 
let currentPage = 1
let totalPages = 1;


document.addEventListener('DOMContentLoaded', function() {
    displayAllCharacters();
});

inputPesquisa.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        const name = inputPesquisa.value;

        if (name.trim() !== '') {
            searchCharacters(name);
        } else {
            displayAllCharacters();
        }
    }
});

function createStatusIndicator(status) {
    const indicator = document.createElement('span');
    indicator.classList.add('status-indicator');
    if (status === 'Alive') {
        indicator.style.backgroundColor = 'green';
    } else if (status === 'Dead') {
        indicator.style.backgroundColor = 'red';
    } else {
        indicator.style.backgroundColor = 'gray';
    }
    return indicator;
}

// Função para exibir os personagens de acordo com a página selecionada
function displayAllCharacters(page = 1) {
    const charactersPerPage = 6;
    const listElements = document.getElementById('lista');
  
    axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => {
        const characters = response.data.results;
  
 
        listElements.innerHTML = '';
  
  
        charactersToShow.forEach((character) => {
          const li = createCharacterCard(character);
          listElements.appendChild(li);
        });

      })
      .catch((error) => {
        console.error('Erro ao buscar personagens:', error);
      });
  }
    

function searchCharacters(name) {
    const api = `https://rickandmortyapi.com/api/character/?name=${name}`;
    const listElements = document.getElementById('lista');

    axios.get(api)
        .then((response) => {
            const characters = response.data.results;

            // Limpar a lista antes de adicionar novos resultados
            listElements.innerHTML = '';

            const container = document.createElement('div');
            container.classList.add('cards-container');

            characters.forEach((character) => {
                const li = createCharacterCard(character);
                container.appendChild(li);
            });

            listElements.appendChild(container);
        })
        .catch((error) => {
            alert('Erro ao buscar personagens:', error);
        });
}


const miniCard = document.querySelector('.card-container .item-character');

// Verifica se o mini-card existe antes de removê-lo
if (miniCard) {
  miniCard.remove() // Remove o mini-card se ele existir
}

//  card de personagem com base nos dados da API
function createCharacterCard(character) {
    const cardContainer = document.querySelector('.card-container');
  
    const card = document.createElement('div');
    card.classList.add('item-character');
  
    card.setAttribute('data-bs-toggle', 'modal')
    card.setAttribute('data-bs-target', "#exampleModal")

    const img = document.createElement('img');
    img.src = character.image;
    img.alt = `Imagem de ${character.name}`;
    card.appendChild(img);
  
    const characterInfo = document.createElement('div');
    characterInfo.classList.add('character-info');
  
    const name = document.createElement('h2');
    name.textContent = character.name;
    characterInfo.appendChild(name);
  
    const statusSpecies = document.createElement('div');
    statusSpecies.classList.add('status-species');
  
    const status = document.createElement('span');
    status.textContent = `Status: ${character.status}`;
    const statusIndicator = document.createElement('span');
    statusIndicator.classList.add('status-indicator');
    
    // cor indicador pelo status
    if (character.status === 'Alive') {
      statusIndicator.style.backgroundColor = 'green';
    } else if (character.status === 'Dead') {
      statusIndicator.style.backgroundColor = 'red';
    } else {
      statusIndicator.style.backgroundColor = 'gray';
    }
    statusSpecies.appendChild(status);
    statusSpecies.appendChild(statusIndicator);
  
    const species = document.createElement('span');
    species.textContent = `Espécie: ${character.species}`;
    statusSpecies.appendChild(species);
  
    characterInfo.appendChild(statusSpecies);
  
    const additionalInfo = document.createElement('div');
    additionalInfo.classList.add('additional-info');
  
    const lastLocation = document.createElement('p');
    lastLocation.textContent = `Última localização: ${character.location.name}`;
    additionalInfo.appendChild(lastLocation);
  
 
    const lastEpisode = document.createElement('p');
    lastEpisode.textContent = `Visto por último em: ${character.lastEpisodeName}`;
    additionalInfo.appendChild(lastEpisode);
  
    characterInfo.appendChild(additionalInfo);
  
    card.appendChild(characterInfo);
    cardContainer.appendChild(card);
  }
  
  // Chamada à API para obter os dados dos personagens
  axios.get('https://rickandmortyapi.com/api/character')
    .then((response) => {
      const characters = response.data.results;
      characters.forEach((character) => {
        createCharacterCard(character);
      });
    })
    .catch((error) => {
      console.error('Erro ao buscar personagens:', error);
    });
  


// Estilo CSS para as bolinhas de status
const style = document.createElement('style');
style.textContent = `
    .status-indicator {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        display: inline-block;
        margin-right: 5px;
    }
`;
document.head.appendChild(style);

async function footer() {
    const personagens = await axios.get(`https://rickandmortyapi.com/api/character`)
    document.getElementById('p').innerText = personagens.data.info.count
    const localizacoes = await axios.get(`https://rickandmortyapi.com/api/location`)
    document.getElementById('l').innerText = localizacoes.data.info.count
    const episodios = await axios.get(`https://rickandmortyapi.com/api/episode`)
    document.getElementById('e').innerText = episodios.data.info.count
    return personagens.data.info.pages
  }



  footer()
  displayAllCharacters()


  // modal boostrap

    const myModal = document.getElementById('myModal')
    const myInput = document.getElementById('myInput')

    myModal.addEventListener('shown.bs.modal', () => {
      myInput.focus()
    })

    document.getElementById('openModalButton').addEventListener('click', function () {
        $('#exampleModal').modal('show'); 
      });


      //Pagination

      function updatePaginationControls() {
        const paginationContainer = document.getElementById('pagination');
    
        // Limpa os controles de paginação antes de recriá-los
        paginationContainer.innerHTML = '';
    
        // Botão para voltar
        const prevButton = document.createElement('button');
        prevButton.textContent = 'Voltar';
        prevButton.addEventListener('click', () => {
            if (currentPage > 1) {
                displayAllCharacters(currentPage - 1);
            }
        });
        paginationContainer.appendChild(prevButton);
    
        // Elemento para exibir a página atual
        const currentPageElement = document.createElement('span');
        currentPageElement.textContent = `Página ${currentPage} de ${totalPages}`;
        paginationContainer.appendChild(currentPageElement);
    
        // Botão para avançar
        const nextButton = document.createElement('button');
        nextButton.textContent = 'Avançar';
        nextButton.addEventListener('click', () => {
            if (currentPage < totalPages) {
                displayAllCharacters(currentPage + 1);
            }
        });
        paginationContainer.appendChild(nextButton);
    }
      