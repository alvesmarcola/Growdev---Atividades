

// 1. Consuma a API: Utilize o endpoint /bodies para obter uma lista de corpos celestes. Armazene esses dados em um array para futuras operações.

const api = axios.create ({
  baseURL: 'https://api.le-systeme-solaire.net/rest/bodies/'
})

function fetchUsers(){
  api.get('')
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
    const response = await api.get('')
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

async function findEarth() {
  try {
    const response = await api.get('terre')
    const corposCelestes = response.data.bodies

    const earth = corposCelestes.find(corpo => corpo.name === 'La Terre')

    console.log(earth)

  } catch (error) {
    console.error('erro')
  } finally {
    console.log('Finalizado')
  }
}


// 4.Use o método some para verificar se algum planeta no array filtrado não tem luas.

async function noMoons () {
  try {
    const response = await api.get('')
    const corposCelestes = response.data.bodies

    const moons = corposCelestes.some(planeta => planeta.numberOfMoons === 0)

    console.log(moons)

  } catch (error) {
    console.error('Erro:', error)
  } finally {
    console.log('Finalizado')
  }
}

noMoons()

// 5.Use o método map para criar um novo array contendo apenas os nomes dos planetas. 


async function arrayPlanets () {
  try {
    const response = await api.get('')
    const corposCelestes = response.data.bodies

    const newArray = corposCelestes.map(corpo => corpo.name)

    console.log(newArray)


  } catch (error) {
    console.error('Erro:', error)
  } finally {
    console.log('Finalizado')
  }

}

arrayPlanets()

// 6.Use os métodos map e sort para criar um novo array que contenha os nomes dos planetas, ordenados pelo seu tamanho (raio)

async function sizePlanets () {

  try {
    const response = await api.get('')
    const corposCelestes = response.data.bodies

    const newArray = corposCelestes.map(corpo => corpo.name)
    
    newArray.sort((a, b) => {
      const raioA = corposCelestes.find(corpo => corpo.name === a).meanRadius
      const raioB = corposCelestes.find(corpo => corpo.name === b).meanRadius
      return raioA - raioB
    })

    console.log(newArray)


  } catch (error) {
    console.error('Erro:', error)
  } finally {
    console.log('Finalizado')
  }

}


sizePlanets()



// 7.Use o método join para criar uma string que contenha os nomes de todos os planetas do array, separados por vírgulas. 

async function stringPlanets (){
  try {
    const response = await api.get('')
    const corposCelestes = response.data.bodies

    const newArray = corposCelestes.map(corpo => corpo.name)

    newArray.join(', ')

    console.log(newArray)


  } catch (error) {
    console.error('Erro:', error)
  } finally {
    console.log('Finalizado')
  }
}


// 8.Use os métodos para pegar os 5 menores planetas e calcular a soma massa total desses planetas. 

async function calculateMass() {
  try {
    const response = await api.get('')
    const corposCelestes = response.data.bodies

    const planets = corposCelestes.sort((a, b) => a.meanRadius - b.meanRadius)
      .slice(0, 5) // pega os 5 menores

    
    const totalMass = planets.reduce((acc, corpo) => acc + corpo.mass.massValue, 0)

    console.log('Os 5 menores planetas:', planets)
    console.log('Soma total da massa dos 5 menores planetas:', totalMass)

  } catch (error) {
    console.error('Erro:', error)
  } finally {
    console.log('Finalizado')
  }
}
calculateMass()


// 9.Verifique se algum planeta tem mais de 2 luas e, em caso afirmativo, listar todos os planetas entre eles que tem densidade maior que 1

async function twoMoons(){
  try {
    const response = await api.get('')
    const corposCelestes = response.data.bodies

    const moons = corposCelestes.some(planeta => planeta.numberOfMoons < 2)
    
    if(moons === true)
    console.log(moons)

    if(moons === false)
    console.log('Não foi possível encontrar planetas com mais de duas luas')

  } catch (error) {
    console.error(error)
  } finally {
    console.log('Finalizado')
  }
}

