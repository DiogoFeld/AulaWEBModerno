// Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO
// programa recebe como parâmetros dois valores numéricos e uma string referente à operação
// e a realize com os valores


function calculadora(int1, int2, operacao = "+") {
    switch (operacao) {
        case "+":
            return int1 + int2;
            break;
        case "-":
            return int1 - int2;
            break;
        case "*":
            return int1 * int2;
            break;
        case "/":
            return int1 / int2;
            break;
    }
}
console.log(calculadora(2,7,"+"));
console.log(calculadora(2,7,"/"));
console.log(calculadora(2,7,"-"));
console.log(calculadora(2,7,"*"));