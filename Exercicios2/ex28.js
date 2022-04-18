// Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o
// segundo é um número que especifica uma quantidade de dígitos. Essa função deverá 
// retornar somente aqueles números do array que têm a quantidade de dígitos 
// indicada pelo segundo parâmetro.

const array1 = [38, 2, 365, 10, 125, 11]
const array2 = [5, 9, 1, 125, 11]

function returnArray(array,numero){
    return array.filter(a => a.toString().length == numero)
}
console.log(returnArray(array1,2))
console.log(returnArray(array2,1))

