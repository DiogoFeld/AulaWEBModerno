console.log("a = " + a);
var a = 2;
//variavel é "inçada" para ser usada na primeira sentença, let não daria certo também
//hoisting é igual a içado/elevado
console.log("a = " + a);


function teste() {
    console.log("a = " + a);
    var a = 2;
    console.log("a = " + a);
    //dentro de funções acontece a mesma
}
teste();


