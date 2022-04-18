// Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
// array recebido como parâmetro.


const numberOnly = a => {
    if(typeof a == "number"){
        return true
    }
    else{
        return false
    }
}


function returnNumberArray(array){
    return array.filter(numberOnly);
}
const array = [1,8,4,"string",true,4]
console.log(returnNumberArray(array))