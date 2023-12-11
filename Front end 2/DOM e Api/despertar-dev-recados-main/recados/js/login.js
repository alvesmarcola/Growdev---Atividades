const form = document.querySelector('form')

form.addEventListener("submit", function(event) {
    event.preventDefault()

    let username = document.getElementById("email").value
    let password = document.getElementById("password").value

    if (username !== '' && password !== '') {
        const userData = {
            login: username,
            password
        }

        loginUser(userData)

        
    } else {
        alert("Por favor, preencha todos os campos.")
    }
})

async function loginUser(userData) {
    try {
        const response = await axios.post("https://65089a2a56db83a34d9c8c86.mockapi.io/api/v1/users", userData)

        window.location.href = "index.html"
    } catch (error) {
        console.error("Erro ao fazer login:", error)
        alert("Erro ao fazer login. Verifique suas credenciais.")
    }
}



// Modal


function openModal() {
    document.getElementById("myModal").style.display = "block"
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none"
  }
  
  // Fecha o modal se o usuário clicar fora dele
  window.onclick = function(event) {
    let modal = document.getElementById("myModal")
    if (event.target == modal) { // fehca o modal apertando em qlqr lugar fora dele
      modal.style.display = "none"
    }
  }

  async function createUser(userData) {
    try {
   
      const response = await axios.post("https://65089a2a56db83a34d9c8c86.mockapi.io/api/v1/users", userData)

      alert("Usuário cadastrado com sucesso!")
      closeModal()
    } catch (error) {
      console.error("Erro ao criar usuário:", error)
      alert("Erro ao criar usuário. Por favor, tente novamente.")
    }
  }

  function validatePassword(){
    let senhaCadastro = document.getElementById('password-cadastro').value
    if (senhaCadastro.length < 6) {
        alert("A senha deve ter no mínimo 6 caracteres!")
      }
      return true
  }



  const api = axios.create({
    baseURL: 'https://65089a2a56db83a34d9c8c86.mockapi.io/api/v1'
  })




    