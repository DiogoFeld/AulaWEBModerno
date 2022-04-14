//Crie uma função que dado dois valores (passados como parâmetros) mostre
//no console a soma, subtração,multiplicação e divisão desses valores.


function MathBasic(a = 1, b = -1) {
    console.log(`o resultado de soma é ${a + b}`)
    console.log(`o resultado de subtração é ${b - a}`)
    console.log(`o resultado de divisão é ${a / b}`)
    console.log(`o resultado de multiplicação é ${a*b}`)
}

MathBasic(2,4);