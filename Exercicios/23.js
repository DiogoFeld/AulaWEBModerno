// Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
// aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
// aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
// "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.

function Nota(codigo, nota1, nota2, nota3) {
    if (!!codigo) {
        const pNota1 = nota1 * 4;
        const pNota2 = nota2 * 3;
        const pNota3 = nota3 * 3;

        let total = (nota1 + nota2 + nota3) / 10;
        if (total >= 5) {
            console.log(`O resutado é ${total}, o aluno ${codigo} esta aprovado`)
        }
        else {
            console.log(`O resutado é ${total}, o aluno ${codigo} esta reprovado`)
        }
    }
    else{
        console.log(`O código é invalido`)
    }
}


Nota(764532,8,5,2);
Nota("",4,4,4);
Nota(0,8,4,6);
