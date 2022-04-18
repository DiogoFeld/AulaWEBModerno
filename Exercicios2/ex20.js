// Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão
// deverá ser de duas casas decimais, arredondando se necessário.

function triangulo(base,altura){
    let resultado = (base * altura) /2 
    resultado = resultado.toFixed(2);
    return resultado;
}
console.log(triangulo(1,3))