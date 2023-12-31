const messagesContainer = document.querySelector('.messages-list')

async function fetchMessages() {
  try {
    const response = await api.get('/notes')
    const messages = response.data

    console.log(messages)

    messagesContainer.innerHTML = ''

    messages.forEach(message => {
      const messageCard = document.createElement('div')
      messageCard.classList.add('card')

      messageCard.innerHTML = `
        <h2 class="card-title">${message.title}</h2>
        <p class="card-description">${message.description}</p>
      `

      messagesContainer.appendChild(messageCard)
    });

    if (messages.length === 0) {
      const h3 = document.createElement('h3')
      h3.textContent = 'Nenhum recado cadastrado.'
      messagesContainer.appendChild(h3)
    }
  } catch (error) {
    console.log('Erro ao buscar mensagens', error)
  }
}


async function editMessages (){

  const response = await api.get('/notes')
  const messages = response.data



}

fetchMessages()





formEditMessage.addEventListener('submit', (event) => {
  event.preventDefault()

  const titleValue = titleInput.value
  const descriptionValue = descriptionInput.value


  const editMessage = {
    title: titleValue,
    description: descriptionValue

  }
  updateMessage(messageId, editMessage)

})

async function populateEditForm(){
  try{
    const response = await api.get(`/notes/${messaged}`)
    const message = response.data

    titleInput.value = message.title
    descriptionInput.value = message.description


  } catch (error) {
    console.error(error)
  }
}