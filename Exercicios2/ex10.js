// Elabore uma função que recebe um número como parâmetro e retorne uma string com o
// símbolo "+" na quantidade especificada no parâmetro.


function SimboloMais(numeroVezes){
    let total = "";
    for(let i = 0; i < numeroVezes; i++){
        total += "+"
    }
    return total;    
}

console.log(SimboloMais(5))
console.log(SimboloMais(0))
console.log(SimboloMais(2))



