
//spread -> manda todos as entries de um objeto até outro
const funcionario = {nome:"maria",salario:4500}
const clone = {ativo:true,...funcionario}

console.log(clone)


//spread -> manda todos os elementos de um array até outro
const frutasA = ["banana", "maça"];
const frutasB = [...frutasA, "Jaca"];

console.log(frutasB)