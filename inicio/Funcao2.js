//funcao sem nome
const imprimirSoma = function (number1, number2) {
    console.log(number1 + number2);
}
imprimirSoma(2,4);

//funcao arrow
const soma = (a,b) => {
    return a + b;
    //o => trabalha como o function acima
}
console.log(soma(3,5));

//retorno implicito
const subtracao = (a,b) => a - b;
//retorno automaticamente tudo dentro daquela linha
console.log(subtracao(6,2));
