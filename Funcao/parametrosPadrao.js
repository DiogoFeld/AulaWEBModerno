// estrategia pra parametro padrao
function Soma1(a,b,c){
    a = a || 1 //a recebe a OU o padrao 1, caso a for false
    b = b || 1 //a recebe b OU o padrao 1, caso b for false
    c = c || 1 //a recebe c OU o padrao 1, caso c for false    
    return a+b+c;
}
console.log("Soma1 é igual há " + Soma1(),Soma1(3),Soma1(1,2,3),Soma1(0,0,0));
//no Soma1(0,0,0) -> entende-se que 0 é false (aula booleanos) e então ele passa pra 1.

function Soma2(a,b,c){
    a = a !== undefined ? a : 1 //operador ternario
    //!== é igual a estritamente diferente
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c 
    return a+b+c;
}

console.log("Soma2 é igual há " + Soma2(),Soma2(3),Soma2(1,2,3),Soma2(0,0,0));


function Soma3(a = 1,b = 1,c = 1){
    return a+b+c;
}

console.log("Soma3 é igual há " + Soma3(),Soma3(3),Soma3(1,2,3),Soma3(0,0,0));
