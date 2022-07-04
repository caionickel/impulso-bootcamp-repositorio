const alunos = [
    {
        nome: 'Rafael',
        nota: 5,
        turma: '1B'
    },
    {
        nome: 'Julia',
        nota: 9,
        turma: '1B'
    },
    {
        nome: 'Heitor',
        nota: 6,
        turma: '2C'
    },
    {
        nome: 'Sofia',
        nota: 3,
        turma: '2D'
    }
]

function alunosAprovados (arr, media_final) {
    let aprovados = []

    for (let i = 0; i < arr.length; i++) {

        const {nota, nome} = arr[i]

        if(nota >= media_final) {
            aprovados.push(nome)
        }
    }

    return aprovados
}

console.log(alunosAprovados(alunos, 5))