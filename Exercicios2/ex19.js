// Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento,
// pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo
// usuário.
// Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade
// indeterminada de números e retorne a média simples desses números.

function arrayMedia(arrayNew){
    let total = 0;
    for(let counter = 0; counter < arrayNew.length; counter++){
        total += arrayNew[counter];
    }
    console.log(arrayNew.length)
    return total / arrayNew.length;
}

const array = [1,2,4,8,6]
console.log(arrayMedia(array))
