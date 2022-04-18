// Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será
// gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual 
// ao número sorteado internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número
// sorteado foi o X". Se não for igual, retorne "Que pena! O número sorteado foi o X". X é o número 
// que foi sorteado.
const min = 1;
const max = 10;



function sorteio(numero){
    const sorteioNumber =  parseInt(Math.random() * (max - min) + min);
    console.log(`o numero é : ${sorteioNumber}`)
    if(numero === sorteioNumber)
        return true;
    return false;
}
console.log(sorteio(7))




