// Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá 
// conter quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro 
// com valores decimais. Declarados os vetores, utilize a função de união concat() de duas maneiras 
// diferentes para unir os vetores, e mostre o resultado no console. Todos os elementos do vetor 
// resultado deverão aparecer no console.
function concatArrays(array1, array2, array3) {
    let bigArray = []
    bigArray = array1.concat(array2)
    bigArray = bigArray.concat(array2)
    bigArray = bigArray.concat(array3)

    const bigArray2 = array1.concat(array2, array3)

    console.log(bigArray2)
    console.log(bigArray)
}

concatArrays([4,12,5,4],["ana,jorge,miguel,joana"],[0.2,0.24,1.4,0.82])