function getPreco(imposto = 0, moeda = "R$"){
   return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = 
{
   nome : "notebook",
   preco: 1485,
   desc: 0.15,
   getPreco
   //nao é necessario apontar para a funcao
}


global.preco = 20;
global.desc = 0.1;

console.log(getPreco())
console.log(produto.getPreco())


const carro = {
   preco: 40000,
   desc: 0.2
 }

//call e apply parece passar os parametros do que a funcao precisa
 console.log(getPreco.call(carro))
 console.log(getPreco.apply(carro))
 
 // podendo mudar via a necessidade de demais parametros.
 console.log(getPreco.call(carro,0.78,"$"))
 console.log(getPreco.apply(carro,[0.45,"$$"]))
 console.log(getPreco.call(global,0.78,"$"))
 
