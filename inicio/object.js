const prod1 = {};
//objeto criado a partir de {}
prod1.nome = "Celular Mega Blaster";
//objetos funcionam com Chave (atributo nomeado) e valor (valor do atributo)
prod1.preco = 4452.5;

console.log(prod1);

prod1["DesconstoMaximo"] = 0.3;
//outra forma de apontar chaves e valores.
console.log(prod1);

const prod2 = {
    nome: "camisa polo",
    preco: 79.90
    //Inserido um forma de colocar um objeto dentro de um objeto
    // obj: {
    //     nome: "botão prateado",
    //     preco: 12
    // }
}
console.log(prod2);
//outra forma de apontar chaves e valores.
