// Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, 
// ele mantém registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota 
// no novo valor e confere se o mesmo é maior ou menor que seu melhor e pior desempenho.
//  Dada uma lista string = “pontuação1 pontuação2 pontuação3 etc..”, escreva uma função 
//  que ao recebê-la irá comparar os valores um a um e irá retornar um vetor com o número 
//  de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior 
//  jogo. (Número do pior jogo)



function comparacao(listString) {
     const resultados = listString.split(" ");
     let lowerDay = 0;
     let lowerResult = parseInt(resultados[0]);
     let greaterResult = parseInt(resultados[0]);
     let diasRecord = 0;
     let total = []

     for (let i in resultados) {
          if (greaterResult < resultados[i]) {
               greaterResult = resultados[i];
               diasRecord++;               
          }
          if (lowerResult < resultados[i]) {
               lowerResult = resultados[i]
               lowerDay = i;
          }
     }
     lowerDay--
     total.push("total de dias com recorde : " + diasRecord)
     total.push("menor resultado foi em : " + lowerDay)


     return total;
}
console.log(comparacao("45 42 48 32 34 48 35 50 54"));