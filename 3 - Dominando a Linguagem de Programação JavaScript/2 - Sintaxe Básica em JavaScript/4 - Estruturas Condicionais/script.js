// //if e elseif e else e ninho de if

// var jogador1 = 0
// var jogador2 = 1
// var placar

// if (jogador1 != -1) {
//     if (jogador1 > 0) {
//         console.log('Jogador 1 marcou ponto!')
//     } else if (jogador2 > 0) {
//         console.log('Jogador 2 marcou ponto!')
//     } else {
//         console.log('Ninguém marcou ponto.')
//     }
// }

// // if ternário
// jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') : console.log('Jogadores inválidos!')

// // switch case

// switch (placar) {
//     case placar = jogador1 > jogador2 :
//         console.log('Jogador 1 ganhou')
//         break
//     case placar = jogador2 > jogador1:
//         console.log('Jogador 2 ganhou')
//         break
//     default:
//     console.log('Ninguém ganhou.')
// }

// estruturas de repetição
let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5']

let object = { prop1: 'valor1', prop2: 'valor2', prop3: 'valor3', }

// for - executa instrução até ela seja falsa
// for (let indice = 0; indice < array.length; indice++) {
//     console.log(indice)
// }


//for in executa repetição a partir de uma propriedade
//com array
// for (let i in array) {
//     console.log(i)
// }

// // com object
// for (i in object) {
//     console.log(i)  
// }

// // for of executa uma repetição a partir de um valor
// for (i of array) {
//     console.log(i)
// }

// //com object ** não funciona com objects, mas funciona se especificar a propriedade
// for (i of object.prop1) {
//     console.log(i)
// }

var a = 0

// while (a < 10) {
//     a++;
//     console.log(a)
// }

do {
    a++
    console.log(a)
} while (a < 10)
