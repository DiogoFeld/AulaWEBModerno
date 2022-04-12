// Um funcionário irá receber um aumento de acordo com o seu plano de
// trabalho, de acordo com a tabela abaixo:
// A 10%
// B 15%
// C 20%
// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
// novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.


function aumentoSalarial(option, salarioAtual) {
    let salarioFinal = null;
    switch (option) {
        case "A":
            salarioFinal = 1.1 * salarioAtual;
            salarioFinal = salarioFinal + "R$"
            break;
        case "B":
            salarioFinal = 1.15 * salarioAtual;
            salarioFinal = salarioFinal + "R$"
            break;
        case "C":
            salarioFinal = 1.2 * salarioAtual;
            salarioFinal = salarioFinal + "R$"
            break;
        default:
            return "Tipo Invalido"
            
    }
    return salarioFinal

}
console.log(aumentoSalarial("B",2000))
console.log(aumentoSalarial("C",4000))