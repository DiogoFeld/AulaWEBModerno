// Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
// inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação 
// de cada elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira 
// se e somente se o valor do elemento for maior que 5.

function vectorSimples(array, number) {
    let newArray = [];

    for (let i in array) {
        newArray.push((array[i] * number))
    }
    return newArray;
}


function vectorTo5(array, number) {
    let newArray = [];

    for (let i in array) {
        if (array[i] > 5) {
            newArray.push((array[i] * number))
        }
    }
    return newArray;
}
console.log(vectorSimples([1,2,4,8,45,12],2))
console.log(vectorTo5([1,2,4,8,45,12],2))

