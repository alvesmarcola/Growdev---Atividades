

// 1. Consuma a API: Utilize o endpoint /bodies para obter uma lista de corpos celestes. Armazene esses dados em um array para futuras operações.

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


// 2. Filtre os Planetas: Use o método filter para criar um novo array contendo apenas planetas.

async function filterPlanets() {
  try {
    const response = await api.get('bodies')
    const bodies = response.data.bodies
    const planets = bodies.filter(body => body.isPlanet === true)
    return planets // Retorna so os planetas
  } catch (error) {
    console.error('Ocorreu um erro:', error)
  }
}

filterPlanets().then(planets => {
  console.log(planets)
})


// 3. Encontre a Terra: Use o método find para encontrar o objeto que representa a Terra no array filtrado. 





