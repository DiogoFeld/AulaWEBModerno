// Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso.
//  Use o comando switch. Crie um case default que escreva ‘Número fora do intervalo.’


function numberExtenso(number) {
    switch (number) {
        case 1:
            return "Um"
            break
        case 2:
            return "Dois"
            break
        case 3:
            return "Três"
            break
        case 4:
            return "Quatro"
            break
        case 5:
            return "Cinco"
        case 6:
            return "Seis"
        case 7:
            return "Sete"
        case 8:
            return "Oito"
        case 9:
            return "Nove"
        case 10:
            return "Dez"
            break
    }
}

console.log(numberExtenso(5))