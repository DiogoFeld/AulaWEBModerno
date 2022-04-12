//Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
//e imprime a quantidade no console.


function precorrerVetor(vetor) {
   let negativos = 0;

    for (let i in vetor) {
        if(vetor[i] < 0){
            negativos++
        }
    }
    return `os negativos são : ${negativos}`
}

console.log(precorrerVetor([4,12,-51,24,-7,2,55,0]))