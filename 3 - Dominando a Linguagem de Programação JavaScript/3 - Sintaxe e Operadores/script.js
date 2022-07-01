function operacao(a, b) {
    soma = a + b
    comparaDez = 'menor que'
    comparaVinte = 'menor que'

    if (soma > 10) {
        comparaDez = 'maior que'
    } else if (soma == 10) {
        comparaDez = 'igual a'
    }

    if (soma > 20) {
        comparaVinte = 'maior que'
    } else if (soma == 20) {
        comparaVinte = 'igual a'
    }

    if (a != b) {
        return `Os números ${a} e ${b} não são iguais. Sua soma é ${soma}, que é ${comparaDez} 10 e ${comparaVinte} 20.`
    } else {
        return `Os números ${a} e ${b} são iguais. Sua soma é ${soma}, que é ${comparaDez} 10 e ${comparaVinte} 20.`
    }
}

console.log(operacao(5, 5))