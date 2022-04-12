// Faça um algoritmo que calcule o fatorial de um número.


function fatorial(number) {
    let total = 0;
    let lowerNumber = 0;
    lowerNumber = number - 1;

    total = number * lowerNumber;    
    number = number -2 ;

    while (number > 1) {
        console.log(number)
        total *= number;
        number--;

    }
    return total
}
console.log(fatorial(5))
