const notas = [7.2,45.7,8.4,.56,9,8.1,5.4]
const notasBaixas = []

for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas);

//com callback
//filter chama automaticamente o callback
const notasBaixas2 = notas.filter(function(a){
    return a < 7
});
console.log(notasBaixas2);


const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3);

