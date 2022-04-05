const notas = [4.8,2.5,7.4,9.8,6.5,8,7.5];

for(x in notas){
    if(x == 5)break
    console.log(`x é ${x} que é igual a =  ${notas[x]} e é um ${typeof x}`)
}
// como o nome diz, quebra o codigo dentro de while,for e switch
console.log(`x é ${x} que é igual a =  ${notas[x]} e é um ${typeof x}`)



for(y in notas){
    if(y == 5){
        continue
    }
    //continue "pula" a repetição e vai para a próxima sentença
    console.log(`x é ${y} que é igual a =  ${notas[y]} e é um ${typeof y}`)
}

externo:for(a in notas){
    for(b in notas){
        if(a == 2 && b==3)break externo
        //break quebra o laço em que ele se encontra
        console.log(`Pares são : ${a},${b}`)

    }
}