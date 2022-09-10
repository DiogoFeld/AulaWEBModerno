const notas = [4.8,2.5,7.4,9.8,6.5];

//i no caso abaixo funciona como indice
for(let i in notas){
    console.log(`i é ${i} que equivale a = ${notas[i]}`)
}
//console.log(i); //erro,variavel entende o i como um let, restringindo-o ao bloco do for.


const pessoa = {
    nome:"ana",
    idade: 24,
    peso: 56
}

//atributo no caso abaixo funciona como nome/atribuição da variavel;
for(atributo in pessoa){
    console.log(`atributo é ${atributo} cujo o valor é ${pessoa[atributo]}`)
}

