// Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido 
// dado o número referente ao dia. Considere que domingo é o dia 1 e sábado é o 
// dia 7. Utilize a estrutura Switch
function dayOFweek(day) {    
    switch (day) {
        case 2: case 3: case 4: case 5: case 6:
            console.log("dia da semana");
            break;
        case 1: case 7:
            console.log("fim de semana");            
            break;
        default:
            console.log("data Inválido");
            break;

    }
}
dayOFweek(4);
dayOFweek(2);
dayOFweek(1);
dayOFweek(7);
dayOFweek(9);

