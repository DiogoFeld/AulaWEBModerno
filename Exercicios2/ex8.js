// Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero)
// e realize a multiplicação deles. Porém, não utilize o operador de mutiplicação.

function multiDiferente(n1,n2){
    let vezes = n2;
    let valueResult = 0;
    while(vezes > 0){
        valueResult += n1;
        vezes--;
    }
    return valueResult;
}

console.log(multiDiferente(4,3))
console.log(multiDiferente(4,0))
