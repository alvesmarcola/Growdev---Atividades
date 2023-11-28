const api = axios.create ({
    baseURL: 'http://regres.in/api/'
  })
  
  function fetchUsers(){
    api.get('bodies')
    .then(response =>{
        const bodies = response.data
  
        console.log(bodies)
    })
  
    .catch (error => console.log (error, 'erro'))
    .finally(() => console.log('Finalizado'))
  }
  
  fetchUsers()
  
  async function fetchBodies(){
    try{
      const response = await api.get('bodies')
      const bodies = response.data.bodies
      console.log(bodies)
    }
  
    catch (error) {
      console.log(error, 'erro')
    }
  }

  // Duas formas de fazer a mesma coisa, imprimir a biblioteca