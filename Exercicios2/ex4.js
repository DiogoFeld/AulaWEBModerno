// Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por
// exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.


function meses(mes) {
    mes--
    const meses = ["Janeiro", "Fevereiro", "Abril", "Março", "Maio", "Junho"
        , "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

    return meses[mes];

}
console.log(meses(4));
