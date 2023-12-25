const inputPesquisa = document.getElementById('pesquisa')
const charactersPerPage = 10 // qtd personagens por página
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

function displayAllCharacters(page = 1) {
    const api = `https://rickandmortyapi.com/api/character?page=${page}`;
    const listElements = document.getElementById('lista');

    axios.get(api)
        .then((response) => {
            const characters = response.data.results;

            // Limpa a lista antes de adicionar novos resultados
            listElements.innerHTML = '';

            const container = document.createElement('div');
            container.classList.add('cards-container');

            characters.forEach((character) => {
                const li = createCharacterCard(character);
                container.appendChild(li);
            });

            listElements.appendChild(container);

            // Atualiza a página atual
            currentPage = page;

            // Atualiza o número total de páginas
            totalPages = response.data.info.pages;

            // Atualiza os controles de paginação
            updatePaginationControls();
        })
        .catch((error) => {
            alert('Erro ao buscar personagens:', error);
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

function createCharacterCard(character) {
    const li = document.createElement('li');
    li.classList.add('item-character', 'character-card');
    li.style.display = 'flex'; // Usar flex para alinhar os elementos

    // Adicionar imagem do personagem
    const img = document.createElement('img');
    img.src = character.image;
    li.appendChild(img);

    // Adicionar indicador de status
    const statusIndicator = createStatusIndicator(character.status);
    li.appendChild(statusIndicator);

    // Criar div para o conteúdo do card
    const contentDiv = document.createElement('div');
    contentDiv.style.display = 'flex';
    contentDiv.style.flexDirection = 'column';
    contentDiv.style.marginLeft = '10px'; // Espaçamento entre a bolinha e o conteúdo

    // Nome do personagem com estilo verde
    const nameSpan = document.createElement('span');
    nameSpan.textContent = character.name;
    nameSpan.style.color = 'green';
    nameSpan.style.fontSize = '25px';
    nameSpan.style.marginBottom = '5px'; // Espaço entre o nome e as outras informações
    contentDiv.appendChild(nameSpan);

    // Status e Espécie do personagem
    const statusSpeciesSpan = document.createElement('span');
    statusSpeciesSpan.textContent = ` ${character.status} - ${character.species}`;
    contentDiv.appendChild(document.createElement('br'));
    contentDiv.appendChild(statusSpeciesSpan);

    // Última localização conhecida do personagem
    const lastLocationSpan = document.createElement('span');
    lastLocationSpan.textContent = `Última localização: ${character.location.name}`;
    contentDiv.appendChild(document.createElement('br'));
    contentDiv.appendChild(lastLocationSpan);

    // Encontrando o nome do último episódio
    const lastEpisodeId = character.episode[character.episode.length - 1].split('/').pop();
    axios.get(`https://rickandmortyapi.com/api/episode/${lastEpisodeId}`)
        .then((episodeResponse) => {
            const lastEpisodeName = episodeResponse.data.name;
            const lastEpisodeSpan = document.createElement('span');
            lastEpisodeSpan.textContent = `Visto última vez no ep: ${lastEpisodeName}`;
            contentDiv.appendChild(document.createElement('br'));
            contentDiv.appendChild(lastEpisodeSpan);

            // Adicionar conteúdo do card ao item da lista
            li.appendChild(contentDiv);

            // Criar a barra separadora
            const divider = document.createElement('span');
            divider.classList.add('column-divider');
            listElements.appendChild(divider);
        })
        .catch((error) => {
            console.error('Erro ao buscar episódio:', error);
        });

    return li;
}


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


  footer()
  displayAllCharacters()