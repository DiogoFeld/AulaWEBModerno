// Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos 
// números deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja,
// inclui o 10 e o 20) e quantos deles estão fora do intervalo, escrevendo estas informações.

function intervaloFetor(vetor){
    let numeroDentro = 0;
    let numeroFora = 0;
    
    for(let i in vetor){
        if(vetor[i] >= 10 && vetor[i] <= 20){
            numeroDentro++;
        }
        else{
            numeroFora++;
        }
    }
    console.log(`o total dentro é ${numeroDentro}, o total fora é ${numeroFora}`)
}


intervaloFetor([20,40,11,14,15,18,20,22,30,31])