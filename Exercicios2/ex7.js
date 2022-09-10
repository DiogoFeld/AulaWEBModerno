// Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
// o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
// "entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
// inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
// considerando se numero é igual a minimo ou a maximo.


function checarNumero(numero, minimo, maximo, inclusivo = false){
    let result = null;
    if(inclusivo){
        result = numero >= minimo && numero <= maximo
        return result        
    }
    else{
        result = numero > minimo && numero < maximo
        return result
    }
}


console.log(checarNumero(4,0,10,false))
console.log(checarNumero(-1,0,10,true))
console.log(checarNumero(2,2,10,true))
console.log(checarNumero(2,2,10,false))
