// Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

function precorrerVetor(vetor) {
    let menor = vetor[0]
    let maior = vetor[0]

    for (let i in vetor) {
        if (vetor[i] < menor) {
            menor = vetor[i];
        }
        if (vetor[i] > maior) {
            maior = vetor[i];
        }
    }
    return `menor é ${menor} e maior é ${maior}`
}

console.log(precorrerVetor([4,12,51,24,7,2,55]))
