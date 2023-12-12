const form = document.getElementById('login')

form.addEventListener("submit", async function(event) {
  event.preventDefault()

  let username = document.getElementById("email").value
  let password = document.getElementById("password").value

  if (username !== '' && password !== '') {
      const storedUserData = JSON.parse(localStorage.getItem("user_data"))

      if (storedUserData) {
          if (username === storedUserData.login && password === storedUserData.password) {
              // Aqui chama a função de login passando os dados para a API
              await loginUser({ login: username, password })
          } else {
              alert("Credenciais inválidas. Por favor, verifique e tente novamente.")
          }
      } else {
          alert("Nenhum usuário cadastrado. Por favor, faça o cadastro primeiro.")
      }
  } else {
      alert("Por favor, preencha todos os campos.")
  }
})

const cadastroForm = document.getElementById('cadastroForm');

cadastroForm.addEventListener("submit", async function(event) {
    event.preventDefault(); // Previne o comportamento padrão de submissão do formulário

    const emailCadastro = document.getElementById('email-cadastro').value;
    const passwordCadastro = document.getElementById('password-cadastro').value;

    if (emailCadastro && passwordCadastro && passwordCadastro.length >= 6) {
        const userData = {
            login: emailCadastro,
            password: passwordCadastro
        };

        await createUser(userData); // Chama a função para criar o usuário
    } else {
        alert("Por favor, preencha todos os campos corretamente.");
    }
});


async function loginUser(userData) {
  try {
      const response = await axios.post("https://65089a2a56db83a34d9c8c86.mockapi.io/api/v1/login", userData)
      
      // Lógica de sucesso de login: redireciona para a página dos recados (index.html) ou realiza outras operações necessárias
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
        
        if (response.status === 201) {
            // Salvando os dados no localStorage
            localStorage.setItem("user_data", JSON.stringify(response.data))
            
            alert("Usuário cadastrado com sucesso!")
            closeModal() // Fechando o modal apenas após o cadastro ser concluído com sucesso
        } else {
            console.error("Erro ao criar usuário:", response.statusText)
            alert("Erro ao criar usuário. Por favor, tente novamente.")
        }
    } catch (error) {
        console.error("Erro ao criar usuário:", error)
        alert("Erro ao criar usuário. Por favor, tente novamente.")
    }
}







function validatePassword() {
  let senhaCadastro = document.getElementById('password-cadastro').value

  if (senhaCadastro.length < 6) {
      alert("A senha deve ter no mínimo 6 caracteres!")
      return false // impede o envio se n atende os requisitos rsrs
  }

  return true
}




  const api = axios.create({
    baseURL: 'https://65089a2a56db83a34d9c8c86.mockapi.io/api/v1'
  })




    