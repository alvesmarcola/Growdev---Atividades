const planetas = []
const sistemasolar = []
const api = axios.create({
  baseURL: 'https://api.le-systeme-solaire.net/rest/bodies/'
});

// 1. Consuma a API: Utilize o endpoint /bodies para obter uma lista de corpos celestes. Armazene esses dados em um array para futuras operações.


async function fetchUsers() {
  try {
    const response = await axios.get('')
    const bodies = response.data
    console.log(bodies)
  } catch (error) {
    console.error('Erro ao buscar usuários:', error)
  }
}


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
    const terra = planetas.find(planeta => planeta.englishName === "Earth")
    console.log(terra)

  } catch (error) {
    console.error('erro')
  } finally {
    console.log('Finalizado')
  }
}

  


// 4.Use o método some para verificar se algum planeta no array filtrado não tem luas.

async function noMoons () {
  try {
    const luas = planetas.some(planeta => planeta.moons === null)
    console.log(luas)

  } catch (error) {
    console.error('Erro:', error)
  } finally {
    console.log('Finalizado')
  }
}

// 5.Use o método map para criar um novo array contendo apenas os nomes dos planetas. 


async function arrayPlanets () {
  try {
    const nomes = planetas.map(planeta => planeta.name)
    console.log(nomes)


  } catch (error) {
    console.error('Erro:', error)
  } finally {
    console.log('Finalizado')
  }

}


// 6.Use os métodos map e sort para criar um novo array que contenha os nomes dos planetas, ordenados pelo seu tamanho (raio)

async function sizePlanets () {

  try {
    const raio = planetas.sort((a, b)  => a.equaRadius - b.equaRadius)
    const tamanho = raio.map(planeta => planeta.name)
    console.log(tamanho)


  } catch (error) {
    console.error('Erro:', error)
  } finally {
    console.log('Finalizado')
  }

}


// 7.Use o método join para criar uma string que contenha os nomes de todos os planetas do array, separados por vírgulas. 

function stringPlanets() {
  const planeta = planetas.map(planeta => planeta.name)
  const virgula = planeta.join(', ')
  console.log(virgula)
}


// 8.Use os métodos para pegar os 5 menores planetas e calcular a soma massa total desses planetas. 

function calculateMass() {
  const raio = planetas.sort((a, b)  => a.equaRadius - b.equaRadius)
  const soma = raio.slice(0, 5).reduce((acc, planetas) => {
      return acc + planetas.mass.massValue
  }, 0)
    console.log(soma)
}


// 9.Verifique se algum planeta tem mais de 2 luas e, em caso afirmativo, listar todos os planetas entre eles que tem densidade maior que 1

async function twoMoons(){
  const maisDeDuasLuas = planetas.filter(planeta => planeta.moons > 2)
    
  const planetasFiltrados = maisDeDuasLuas.filter(planeta => planeta.density > 1)

  if (planetasFiltrados.length > 0) {
      console.log(planetasFiltrados)
  } else {
      console.log("Nenhum planeta com mais de 2 luas e densidade maior que 1 foi encontrado.")}
}

// 10.Encontre e imprima na tela todos nomes dos astrose suas respectivas datas de descoberta (os que tiverem), ordenando-os do mais recente ao mais antigo.


function printNamesAndDates() {
  api()
  const data = planetas.filter(planeta => planeta.discoveryDate !== "")
  const planeta = data.sort((a, b) => a.discoveryDate - b.discoveryDate)
  console.log(planeta)
    .catch(error => console.log(error))
}





// 11. Encontrando Astro: Faça uma função que recebe um nome, e retorna a menor distancia do sol, a massa, gravidade e densidade 

function findAstroInfoByName(name) {
  return api.get('')
    .then(response => {
      const bodies = response.data.bodies
      const astro = bodies.find(body => body.englishName.toLowerCase() === name.toLowerCase())

      if (astro) {
        const astroInfo = {
          name: astro.englishName,
          minDistanceFromSun: astro.semimajorAxis,
          mass: astro.mass,
          gravity: astro.gravity,
          density: astro.density
        }
        return astroInfo
      } else {
        throw new Error('Astro não encontrado')
      }
    })
    .catch(error => {
      console.log(error)
      return null
    })
}

// 12. Filtro de Temperatura: econtre os planetas que tem uma temperatura de 8 a 30 graus celsius. Cuidado que o AvgTemp está na escala Kelvin. Ordene-os do mais frio ao mais quente.

function kelvinToCelsius(kelvin) {
  return kelvin - 273.15 // Fórmula de conversão de Kelvin para Celsius
}

function filterPlanetsByTemperature() {
  return api.get('')
    .then(response => {
      const planets = response.data.bodies.filter(body => {
        if (body.isPlanet && body.avgTemp !== undefined) {
          const tempCelsius = kelvinToCelsius(body.avgTemp)
          return tempCelsius >= 8 && tempCelsius <= 30
        }
        return false
      })

      // Ordenando do mais frio para o mais quente
      planets.sort((a, b) => {
        const tempA = kelvinToCelsius(a.avgTemp)
        const tempB = kelvinToCelsius(b.avgTemp)
        return tempA - tempB
      })

      return planets
    })
    .catch(error => {
      console.log(error)
      return []
    })
}


// 13. Separando Planetas. Faça uma função que retorna um objeto, separando todos os astros pelo seu tipo. bodyType 

function separateByBodyType() {
  return api.get('')
    .then(response => {
      const bodies = response.data.bodies

      const separatedByType = bodies.reduce((result, body) => {
        const bodyType = body.bodyType
        if (!result[bodyType]) {
          result[bodyType] = []
        }
        result[bodyType].push(body);
        return result
      }, {})

      return separatedByType;
    })
    .catch(error => {
      console.log(error)
      return {}
    })
}

// 14. Ordenação Complexa: Use sort e slice para ordenar os astros primeiro por tipo e depois por tamanho, pegando os 3 maiores de cada tipo. 
async function sortByTypeAndSize() {
  try {
    const response = await api.get('')
    const bodies = response.data.bodies

    const sortedByTypeAndSize = bodies.sort((a, b) => {
      if (a.bodyType !== b.bodyType) {
        return a.bodyType.localeCompare(b.bodyType)
      }
      return b.meanRadius - a.meanRadius
    })

    const largestByType = {}
    sortedByTypeAndSize.forEach(body => {
      if (!largestByType[body.bodyType] || largestByType[body.bodyType].length < 3) {
        largestByType[body.bodyType] = largestByType[body.bodyType] || []
        largestByType[body.bodyType].push(body)
      }
    });

    return largestByType
  } catch (error) {
    console.log(error)
    return {}
  }
}

// 15. Encontrando planetas orbitados. Encontre todos os planetas que são orbitados por pelo menos um corpo celeste. Imprima na tela o nome do planeta e seus orbitadores. 

async function planetsOrbit() {
  const planetasComLuas = planetas.filter(planeta => Array.isArray(planeta.moons) && planeta.moons.length > 0)

  planetasComLuas.forEach(planeta => {
      const luas = planeta.moons.map(moon => moon.moon)
      console.log(`Planeta: ${planeta.englishName}, Luas: ${luas.join(', ')}`)
  })
}

// 16. Média da Massa dos Planetas: Use o método reduce para calcular a média da massa de todos os planetas e imprimir o resultado. 

async function planetMass() {
  const totalMass = planetas.reduce((acumulador, planeta) => acumulador + planeta.mass.massValue, 0)
  
  const mediaMass = totalMass / planetas.length

  console.log(`Média da massa dos planetas: ${mediaMass.toFixed(2)} unidades de massa.`)
}
// 17. Calcule a distância entre Saturno e Plutão. Utilize o perihelion e o aphelion para calcular a menor distância possível entre os planetas

async function saturn() {
  const saturno = sistemasolar.find(planeta => planeta.englishName === 'Saturn')
  const plutao = sistemasolar.find(planeta => planeta.englishName === 'Pluto')

      const distanciaMinima = plutao.perihelion - saturno.aphelion
      console.log(`A menor distância possível entre Saturno e Plutão é aproximadamente ${distanciaMinima} unidades astronômicas.`)
}
// 18. Planetas com Luas: liste todos os planetas que têm uma ou mais luas. Imprima na tela o planeta, e quantas luas ele tem. 

async function planetWithMoon() {
  const planetasComLuas = planetas.filter(planeta => Array.isArray(planeta.moons) && planeta.moons.length > 0)

  planetasComLuas.forEach(planeta => {
      const luas = planeta.moons.map(moon => moon.moon)
      console.log(`Planeta: ${planeta.englishName}, Luas: ${luas.length}`)
  })
}


/* 19. O Desafio Final em Manipulação de Dados e Cálculos 
 - Crie um novo array que contém apenas planetas (excluindo luas, asteroides, etc.). 
 - Crie um novo array que contém apenas as massas dos planetas. - Ordene o array de massas em ordem crescente. */

async function final() {
  console.log(planetas)
  const massas = planetas.map(planeta => planeta.mass.massValue)
  const massas1 = massas.sort((a,b) => a - b)
  console.log(massas1)

  let mediana
  if (massas.length % 2 == 0) {
      const x = massas.length / 2
      const y = x - 1
      mediana = (massas[x] + massas[y]) / 2

  } else {
      mediana = massas[Math.floor(massas.length / 2)]
  }

  console.log(mediana)

  let valormaisproximo = Number.MAX_SAFE_INTEGER // representa o maior inteiro seguro que pode ser representado de forma precisa e exata
  let index
  massas.forEach((massa, i) => {
      const valor = Math.abs(massa - mediana)
      if (valor < valormaisproximo) {
          valormaisproximo = valor
          index = i
      }
  });

  const valormaisproximoMassa = planetas.find(planet => planet.mass.massValue === massas[index])
  console.log(19, valormaisproximoMassa)
}



async function fetchBodies() {
    const response = await axios.get('https://api.le-systeme-solaire.net/rest/bodies')
    sistemasolar.push(...response.data.bodies)

     fetchUsers()
     filterPlanets()
     findEarth()
     noMoons()
     arrayPlanets()
     sizePlanets()
    stringPlanets()
    calculateMass()
     twoMoons()
    printNamesAndDates()
    findAstroInfoByName('Earth')
    filterPlanetsByTemperature()
    separateByBodyType()
     sortByTypeAndSize()
    planetsOrbit()
    planetMass()
    saturn()
    planetWithMoon()
     final()
}

console.log(fetchBodies())