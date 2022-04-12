// Criar uma função para calcular o valor a ser pago de anuidade de uma associação. 
// A função recebe como parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…)
// que foi paga e o valor da anuidade. A anuidade deve ser paga no mês de janeiro. Por mês, é 
// cobrado 5% de juros (sob o regime de juros compostos). O retorno deve ser o valor a ser pago 
// para o respectivo mês escolhido.

function anuidade(mes, capitalInicial) {
    let mesesTotal = 12 - mes;
    for (mesesTotal; mesesTotal <= 12; mesesTotal++) {
        console.log(mesesTotal);
        capitalInicial = capitalInicial * 1.05;
    }
    capitalInicial = capitalInicial.toFixed(2);
    return "o total em janeiro é: R$ " + capitalInicial;
}
console.log(anuidade(5, 2400));