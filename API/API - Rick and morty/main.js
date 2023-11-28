const rm = axios.create ({
    baseURL: 'https://rickandmortyapi.com/api'
  })

 // 1.Listar personagens por status
  async function fetchCharacters(status){
    try{
        const response = await rm.get(`character?status=${status}`)
         const character = response.data.results
         console.log(character)
    }
          catch (error) {
            console.log(error, 'erro')
          }
          finally {
            console.log('Finalizado')
          }
    }

    fetchCharacters('unknown')

    //2.Encontrar personagem por nome
    async function findCharactersByName(name){
        try {const response = await rm.get(`character?name=${name}`)
        console.log(response.data)}

        catch (error) {
            console.error(error, 'Nome não localizado')
    }
        finally {
            console.log('Finalizado')
        }
    }
    const name = prompt('Digite o nome do personagem que quer encontrar?')
    findCharactersByName(name)

    // **Parte 2: Explorar episódios**
    //  1. **Listar episódios por temporada**

    async function listEpisode (season){
        try{
            const response = await rm.get(`episode?episode=S01${season}`)
            const result = response.data.results
            result.forEach(episodioNome => console.log(`Episódio: ${episodioNome.name}`) 
                
            )
        }
        catch(error){
            console.error(error)
        }
        finally{

        }
    }

    listEpisode(Number(prompt('Digite o numero da temporada:')))

    async function episodeDetails(episode){
        try{
            const response = await rm.get(`episode${episode}`)
            const result = response.data.results
            console.log(`Episode: ${result.episode} | Name: ${result.name}`)
        }
        catch(error){
            console.error(error, "Ep não encontrado")
        }
        finally{
            console.log('Finalizado')
        }
    }

    episodeDetails("S01E05")

   // 1. **Listar locais**
   //- Utilizar a API para obter uma lista de locais.
   //- Exibir os nomes dos locais. 

    async function listLocation(location){
        try{
            const response = await rm.get(`location${location}`)
            const result = response.data.results
            console.log()
        }
        catch(error){
            console.error(error, "Local não encontrado")
        }
        finally{
            console.log('Finalizado')
        }

    }

    listLocation('Citadel of Ricks')