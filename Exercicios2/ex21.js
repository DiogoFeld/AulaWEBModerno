// Criar uma função que receba um array de números e retorne o menor número desse array.
const array = [4, 8, 3, 1, 2, 6, 4]
const menorValor = (a, b) => {
    if (b < a)
        return b
    else {
        return a
    }
}

function MenorNumero(array) {
    return array.reduce(menorValor)
}

console.log(MenorNumero(array))
console.log(MenorNumero([10, 5, 35, 65]))
console.log(MenorNumero([5, -15, 50, 3]))
