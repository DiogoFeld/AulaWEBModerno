//coleçao dinamica de pares<chave,valor>
const produto = new Object;
produto.nome = "cadeira";
produto["marcaDoProduto"] = "genérico"
produto.preco = 220


console.log(produto);
delete produto.preco;
delete produto.marcaDoProduto;
console.log(produto);


const carro = {
    modelo: "A4",
    valor: 84000,
    proprietario: {
        nome: "cassio",
        idade: 45,
        endereco: {
            rua: "minapois",
            numero: 12
        }
    },
    codutores:[
        {
            nome:"junior",
            idade:22
        },
        {
            nome:"ana",
            idade:52
        }
    ],
    calcularValorSeguro(){

    }
}

carro.proprietario.endereco.numero = 41;
console.log(carro.proprietario.endereco.numero);
console.log(carro["proprietario"]["endereco"]["numero"]);//outra forma de acessar o objeto
carro["proprietario"]["endereco"]["rua"] = "vicente";
console.log(carro["proprietario"]["endereco"]["rua"]);//outra forma de acessar o objeto

console.log(carro)
// delete carro.codutores;
delete carro.proprietario;
console.log(carro)
console.log(carro.codutores.length)