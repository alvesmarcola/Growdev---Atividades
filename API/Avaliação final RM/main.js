
// const api = `https://rickandmortyapi.com/api/character/?name=${name}`

// axios
//   .get(api)
//   .then((response) => {
//     const characters = response.data.results

//     // aonde serão exibidos
//     const listElements = document.getElementById('lista')

//     // Vai add cada personagem a Li item-character  e exibir as infos e img
//     characters.forEach((character) => {
//       const li = document.createElement('li')
//       li.classList.add('item-character') // add classe

//       const img = document.createElement('img')
//       img.src = character.image; // aq vai retornar as img dos personagens vindo da API
//       li.appendChild(img) // addd img a li
      
//       const infos = document.createElement('div')

//       // Propriedades exibidas p cada personagem
//       const displayProperties = ['id', 'name', 'status', 'species', 'gender']

//       // P cada propriedade cria um  span com seu valor e adiciona à div de informações
//       displayProperties.forEach((property) => {
//         const span = document.createElement('span')
//         span.textContent = `${property}: ${character[property]}`
//         infos.appendChild(span)
//       })

//     //   const wallpaper = document.createElement('img')
//     //   wallpaper.src = './image.png'
//     //   infos.appendChild(wallpaper)

//       // Add de fato as infos a li
//       li.appendChild(infos)

//       // Add li a lista de personagens
//       listElements.appendChild(li)


//       // fazer footer, adicionando as infos da serie (PERSONAGENS: LOCALIZAÇÕES: PERSONAGENS: )


//     })
//   })
//   .catch((error) => {
//     alert('Erro: ', error)
//   })
