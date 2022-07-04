function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`
}

const pessoa1 = {
    nome: "Maria",
    idade: 30
}

const pessoa2 = {
    nome: "Carla",
    idade: 26
}

const animal = {
    nome: 'Yoko',
    idade: 3,
    raca: 'Pug'
}

console.log(calculaIdade.call(animal, 10))
console.log(calculaIdade.apply(animal, [10]))