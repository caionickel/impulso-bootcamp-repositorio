//o que são vetores ou arrays

// como declarar um array
let array  = ['string', 1, true]
console.log(array)

// pode guardar vários tipos de dados
let arrayDois = ['string', 1, true, ['array1'], ['array2'], ['array 3']]
console.log(arrayDois[0]) //primeiro item do array

//forEach
arrayDois.forEach(function(item, index){console.log(item, index)})

// push - adiciona um novo item no final do array
arrayDois.push('novo item')
console.log(arrayDois)

//pop - apaga o ultimo item do array
arrayDois.pop()
console.log(arrayDois)

//shift - apaga o primeiro item do array
arrayDois.shift()
console.log(arrayDois)

//unshift - adiciona um item no inicio do array
arrayDois.unshift()
console.log(arrayDois)

//IndexOf - saber qual indice de um elemento do array
console.log(array.indexOf(true))

//splice - remove ou substitui um item por um indice
arrayDois.splice(0, 3)
console.log(arrayDois)

//slice - retorna uma parte de um array existente
arrayDois.slice(0, 3)
console.log(arrayDois)

let object = {
    string: 'string',
    number: 1,
    boolean: true,
    array: ["array"],
    objetoInterno: {
        objectInterno: 'objeto interno'
    }
}

console.log(object.objetoInterno)

var string = object.string
console.log(string)

var arrayInterno = object.array
console.log(arrayInterno)

