//Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

function vetor(vetor) {
    let pares = 0
    let impares = 0

    for (let i in vetor) {
        if ((vetor[i] % 2) == 0) {
            pares++;
        }
        else {
            impares++;
        }
    }
    console.log(`numeros pares totais é igual a ${pares}, numeros impares é igual a ${impares}`)
}

vetor([4,7,8,6,2,1,457,44])


