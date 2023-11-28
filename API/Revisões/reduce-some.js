const numbers = [1,2,3,4,5]

const sum = numbers.reduce((acc, currentValue) => acc + currentValue, 0)

console.log('Soma dos números:', sum) // Vai imprimir 15, soma dos numeros dali

const elements = ['maça', 'banana', 'laranja', 'banana', 'maça']

//////////////////////


const grouped = elements.reduce((acc, currentValue) => {
    
})



// const maioresQueZero = numbers.reduce((acc, currentValue) => {
//     return acc && currentValue > 0
// }, true) 

const maioresQueZero = numbers.every((number) => number >= 0)



console.log(math.PI)

const math = {
    PI: 3.14  
}


//Datas
const today = new date()

console.log(currentDate.getFullYear()) // ano atual
console.log(currentDate.getMonth() + 1) // porém retorna até 11, pq a contagem começa do 0, então +1 deixa normal dboas
console.log(currentDate.getDay() + 1) // msm esquema de cima
console.log(currentDate.getHours)

console.log(today.toLocaleDateString('pt-BR', options))

const options = {
    weekday : 'long',
    year: 'numeric',
    month: 'long',
}

const promessa = new promise((resolve, reject) => {
    let condicao = true
    if (condicao)
    resolve('Ok! Certin')
    else reject('Erro pai')
})

promessa
.then(resolucao => console.log(resolucao))
.catch(err => console.log(err, 'erro'))
.finnaly(() => console.log('cabo rei'))
