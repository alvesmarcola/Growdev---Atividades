function fetchUsers() {
    axios.get("https://reqres.in/api/users").then((res) => {
      const user = res
  
      console.log(user)
    })
    .catch(error => {
        console.log('Erro na busca de usuários', error)
    })
  }
  
  fetchUsers()


  function cep() {
    let cep = Number(prompt("Qual seu cep?"))
    axios
.get(`https://viacep.com.br/ws/${cep}/json`)
      .then((res) => {
        const cepCompleto = res.data
  
        console.log(
          `Você mora na rua ${cepCompleto.logradouro} e bairro ${cepCompleto.bairro}`
        )
      })
      .catch((error) => {
        console.log("Erro ao buscar o cep")
      })
  }
  
  cep()


  // Segunda aula...

  axios.get('https://api.le-systeme-solaire.net/rest/bodies/').then((result) => {
    console.log(result)
})

async function getBodies(){
    console.log('buscando dados...')
    const result = axios.get('https://api.le-systeme-solaire.net/rest/bodies/')
    console.log(result)
}

getBodies().then((result) => {
    console.log(result)
})

