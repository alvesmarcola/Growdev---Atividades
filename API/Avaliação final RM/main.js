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

        })
        .catch((error) => {
            alert('Erro ao buscar personagens:', error);
        });
}


// infos no footer

async function footer() {
    const personagens = await axios.get(`https://rickandmortyapi.com/api/character`)
    document.getElementById('p').innerText = personagens.data.info.count
    const localizacoes = await axios.get(`https://rickandmortyapi.com/api/location`)
    document.getElementById('l').innerText = localizacoes.data.info.count
    const episodios = await axios.get(`https://rickandmortyapi.com/api/episode`)
    document.getElementById('e').innerText = episodios.data.info.count
    return personagens.data.info.pages
  }