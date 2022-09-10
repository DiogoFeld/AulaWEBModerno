// Escreva uma função que receba um array de números e retornará a soma 
// de todos os números desse array.



const onlyNumber = a => typeof a == "number"
const array = [true,4,5,8,"yes",13]
const somaArray = (a,b) => a + b;

function arraySoma(arrayNew){
    return arrayNew.filter(onlyNumber).reduce(somaArray)
}

console.log(arraySoma(array))