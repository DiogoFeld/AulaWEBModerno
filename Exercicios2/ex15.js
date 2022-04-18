// Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
// pares e que também tenham índices pares.


const functionPair = (a,b) => {
    console.log((a % 2 == 0) && (b % 2 == 0))
    
    let boolResult = (a % 2 == 0) && (b % 2 == 0)
    return boolResult

}
const numbers = [4,2,8,5,5,9,11,12]

function onlyPair(array){
    return array.filter(functionPair)
}
console.log(onlyPair(numbers))

