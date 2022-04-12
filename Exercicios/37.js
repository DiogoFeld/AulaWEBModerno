// Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica
// que recebam como parâmetros um número n (número de termo), a1 (o primeiro termo) e r
// (a razão) e escreva os n termos , bem como a soma dos elementos



function Geometrica(nTermos, nPrimeiro, razao) {
    let result = nPrimeiro;

    for (let counter = 0; counter < nTermos; counter++) {
        result *= razao;
    }
    return "reusultado geométrico é " + result;
}

function Aritmetica(nTermos, nPrimeiro, razao) {
    let result = nPrimeiro + (nTermos - 1) * razao;
    return "reusultado aritmético é " + result;
}

console.log(Geometrica(5,1,3));
console.log(Aritmetica(5,1,3));