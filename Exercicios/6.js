// Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de
//  aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de 
//  juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.

function JurosSimples(capital = 1000,juros = 0.1,tempo =1){
     const parcialJuros = capital * juros;
     const totalJuros = parcialJuros * tempo;
     
     return totalJuros + capital;
}


function JurosCompostos(capital = 1000,juros = 0.2,tempo = 6){    
     let total = 0;
     let partial = 0
     total = capital;
     for(let timer = 0;tempo>timer;timer++){
          partial=  total * juros;
          total += partial;
     }
     return total;
}

console.log(JurosSimples())
console.log(JurosCompostos())