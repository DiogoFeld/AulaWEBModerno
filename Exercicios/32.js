// Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

function mediaVetor(vetor) {
   let total = 0;

    for (let i in vetor) {
        total += vetor[i];
    }
    total /= vetor.length;
    console.log(`tamanho é ${vetor.length }`)
    
    return `a média é: ${total}`
}
console.log(mediaVetor([4,12,6,2]))