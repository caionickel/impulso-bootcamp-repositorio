// tipos primitivos

// boolean
var vOuF = false
console.log(typeof(vOuF))

// number
var numeroQualquer = 1
console.log(typeof(numeroQualquer))

// string
var nome = 'Caio'
console.log(typeof(nome))

// como declarar
var varaiavel = 'Caio'
variavel = 'Nickel'
console.log(varaiavel)

let variavel2 = 'Caio'
variavel2 = 'Nickel'
console.log(variavel2)

const constante = 'Caio'
console.log(constante)

// Escopos

var escopoGlobal = 'global'
console.log(escopoGlobal)

function escopoLocal() {
    let escopoLocalInterno = 'local'
    console.log(escopoLocalInterno)
}

escopoLocal()

//Atribuição

var nome = 'nome'

//Comparação
var comparacao = '0' == 0 //return True

//Comparação idêntica
var comparacao = '0' === 0 //return False


//Adição
var adicao = 1 + 1

//Subtração
var subtracao = 2 - 1

// Multiplicação
var multiplicacao = 2 * 3

//Divisao real
var divisaoReal = 6/2

//Divisao inteira
var divisaoInteira = 5 % 2

//Potenciação
var potenciação = 2 ** 10

//Operadores relacionais

//maior que
var maiorQue = 5 > 2

//menor que
var menorQue = 5 < 2

//maior ou igual a
var maiorOuIgual = 5 >= 2

//menor ou igual a
var menorOuIgual = 5 <= 2

// Operadores Lógicos

var e = true && false
console.log(e)

var ou = true || false
console.log(ou)

var nao = !true
console.log(nao)


