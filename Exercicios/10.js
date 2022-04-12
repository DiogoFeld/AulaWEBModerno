// Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e
//retorne true ou false


function Divisor3(number){
    let result = number %3;
    return result == 0;

}

console.log(Divisor3(9))
console.log(Divisor3(4))
console.log(Divisor3(8))