const a = {nome:"Ronaldo"}
const b = a;
b.nome = "Jesus"
console.log(a);
// estão apontando para o mesmo lugar.

let c = 3
let d = c;
d++;
console.log(d);
console.log(c);
//valores primitivos são feitos cópias.
//---------EXERCICIOS


let valor;
console.log(valor);
//undefined -> não tem valor definido -> como um espaço vazio
valor = null;
//ausencia de valor -> como uma folha em brango
console.log(valor);
//console.log(valor.toString()); //da erro -> vc nao consegue acessar atributos de algo nulo
const produto = {};
console.log(produto.preco);
//tenta acessar algo que nao foi definido
produto.preco = 245;
console.log(produto.preco);
produto.preco = undefined;
console.log(produto.preco);
//para booleano é 
console.log(!!produto.preco);
console.log(produto);
//ainda pega o "preço setado";

produto.preco = null;
console.log(produto.preco);
console.log(produto);

