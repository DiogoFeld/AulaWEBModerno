// Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne
// a quantidade de vezes que o caractere se repete na string. A função deverá ser
// case-sensitive, ou seja, irá diferenciar maiúsculas de minúsculas.

const frase = "eu sou um bolinho de arroz" //o = 4
const frase2 = "eu sou um bolinho de Arroz" //a = 0

function numberTimer(char,string){
    let counterString = 0;
    
    const arrayString = string.split("");
    for(let i in arrayString){
        if(arrayString[i] == char){
            counterString++
        }
    }
    return counterString;
}

console.log(numberTimer("o",frase))
console.log(numberTimer("A",frase2))
console.log(numberTimer("a",frase2))