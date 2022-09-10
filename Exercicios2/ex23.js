//Criar uma função que receba uma string como parâmetro e conte 
//quantas palavras tem nela.

function contagem(frase){
    const arrayString = frase.split(" ");
    return arrayString.length
}

const frase = "Eu sou um bolinho de Arroz" //6
console.log(contagem(frase));