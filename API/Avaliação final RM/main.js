const inputPesquisa = document.getElementById('pesquisa');

inputPesquisa.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        const name = inputPesquisa.value;

        if (name) {
            searchCharacters(name);
        } else {
            alert('Por favor, insira um nome para pesquisar.');
        }
    }
});

function searchCharacters(name) {
    const api = `https://rickandmortyapi.com/api/character/?name=${name}`;
    const listElements = document.getElementById('lista');

    axios.get(api)
        .then((response) => {
            const characters = response.data.results;

            // Limpar a lista antes de adicionar novos resultados
            listElements.innerHTML = '';

            characters.forEach((character) => {
                const li = document.createElement('li');
                li.classList.add('item-character');

                const img = document.createElement('img');
                img.src = character.image;
                li.appendChild(img);

                const infos = document.createElement('div');

                const displayProperties = ['status', 'species', 'gender'];

                displayProperties.forEach((property) => {
                    const span = document.createElement('span');
                    span.textContent = `${property}: ${character[property]}`;
                    infos.appendChild(span);
                });

                li.appendChild(infos);
                listElements.appendChild(li);
            })
            
            fetchInfo('https://rickandmortyapi.com/api/character/', 'PERSONAGENS')
            fetchInfo('https://rickandmortyapi.com/api/location/', 'LOCALIZAÇÕES')
            fetchInfo('https://rickandmortyapi.com/api/episode/', 'EPISÓDIOS')
        })
        .catch((error) => {
            alert('Erro ao buscar personagens:', error);
        });
}





const serieInfo = document.getElementById('serie');

function fetchInfo(url, label) {
    axios.get(url)
        .then((response) => {
            const count = response.data.info.count;
            const paragraph = document.createElement('p');
            paragraph.textContent = `${label}: ${count || 'XX'}`;
            serieInfo.appendChild(paragraph);
        })
        .catch((error) => {
            console.error(`Erro ao buscar informações de ${label}:`, error);
            const paragraph = document.createElement('p').style = "color: white;"
            paragraph.textContent = `${label}: XX`;
            serieInfo.appendChild(paragraph);
        });
}