//função também é chamada de Higher Function Order
//higher order function

//criação LITERAL
function funct1() {
    return "essa é a funcao 1";
}
//armazenada em uma funcao
const func2 = function () { }

//armazenamento em um array
const array = [function (a, b) { return a + b }, funct1, func2]
console.log(array[1]);

const obj = {
    falar : function () {
        return "eu sou Objeto"
    },
}
console.log(obj.falar());

//passar funcao como parametro
function run(funct1){
    funct1();
}
run(function(){console.log("Brand New Function")})

//funcoes podem conter funcoes
function soma(a,b){
    return function(c = 0){
        console.log(a+b+c);
    }
}
soma(1,2)(4)

//chamando função dentro de função;
const cincoMais = soma(2,3);
cincoMais(4);
cincoMais();



