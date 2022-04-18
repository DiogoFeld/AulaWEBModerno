// Crie uma função que recebe um array de números e retorna o segundo maior 
// número presente nesse array.

const array1 = [12, 16, 1, 5]
const array2 = [8, 4, 5, 6]


function secondBigger(array) {
    let max = Math.max(...array)
    let second = Math.min(...array)
    console.log(max)
    console.log(second)
    for(let i in array){        
        if(array[i] > second && array[i] < max){
            second = array[i]
        }
    }
    return second;
}
console.log(secondBigger(array1))
console.log(secondBigger(array2))
