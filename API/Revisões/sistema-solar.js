async function getBodies () {
    const result = await axios.get ('https://api.le-systeme-solaire.net/rest/bodies/')
    const stars = result.data.bodies
    console.log(stars)// retorna o array inteiro

    const planets = stars.filter(p => p.isPlanet)
    console.log(planets)// retorna so os planetas 

    planets.forEach(planet => {
        planetsContainer.innerHTML += `
        
        <div class="planetCard" onclick+'calcularMassa(${planet.mass.massValue}, ${planet.mass.massExponent})>
            <h2>${planet.englishName}</h2>
            <p>${planet.moons} ? planet.moons.length : 0}Luas </p>

        </div>
        `
    })


}

getBodies()


const planetsContainer = document.querySelector('#planetContainer') // aqui pega uma div id html q n criei dae

function calcularMassa(massValue, massExponent){
    console.log(`a massa de ${name} é ${massa}`)
    const massa = massValue * Math.pow(10, massExponent)

}

const buttonStart = document.querySelector('button')
