const name = prompt('Digite o nome do personagem:')
const api = `https://rickandmortyapi.com/api/character"/?name=${name}`


axios
.get(api)
.then ((response) => {
    const characters = response.data.results
    const listElements = document.getElementById(lista)

    characters.forEach((characters) =>{
        const li = document.createElement('li')
        listElements.classList.add('item-character')

        const img = document.createElement('img')
        img.src = characters.img
        li.appendChild(img)

        const infos = document.createElement('div')

        const exibition = ['id', 'name', 'status', 'species', 'gender']

        exibition.forEach((camp) =>{
            const span = document.createElement('span')
            span.textContent = `${camp} ${personagem[camp]}`
            infos.appendChild(span)
        })

        listElements.appendChild(infos)
        listElement.appendChild(listElements)

    })
})
.catch((error) =>{
    alert('Erro', error)
})