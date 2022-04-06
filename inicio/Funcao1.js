// console.log( typeof Object)
class produto {
};
// console.log(produto);


function ImprimirSoma(number1,number2){
    console.log(number1 + number2);
}

ImprimirSoma(2,5);
ImprimirSoma(2);
//NAN


function ImprimirSoma2(number1,number2 = 1){
    console.log(number1 + number2);
}

//Nova Função com o parametro apontando para 1
ImprimirSoma2(2,5);
ImprimirSoma2(2);

