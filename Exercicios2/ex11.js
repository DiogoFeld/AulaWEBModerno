// Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
// array:

function arrayFormation(array) {
    const arrayNew = [array[0], array[array.length - 1]]
    return arrayNew;
}

console.log(arrayFormation([11,20,30,1]))
console.log(arrayFormation([11]))