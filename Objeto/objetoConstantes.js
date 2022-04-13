// ->pessoa aponta para um endereço de memória -> (1,2,3) -> {...}
const pessoa = {nome: "joão"}
pessoa.nome = "Pedro"
console.log(pessoa)

// ->   novo endereço de memória -> 748
// pessoa  = {nome: "ana"} //apresenta erro pois sobreescreve o endereço da const
console.log(pessoa)

Object.freeze(pessoa);
//freeze "congela o objeto com atributos chave-valor que ele tem"
pessoa.nome  =  "ana"; 
pessoa.endereco  =  "Rua 54"; 
console.log(pessoa.nome)
delete pessoa.nome;
console.log(`após o delete ${pessoa.nome}`)
console.log(pessoa)
//freeze não deixa o objeto ser deletado, o objeto é de fato constante.


//maneira de criar objetos TOTALMENTE estaticos.
const pessoaConstante = Object.freeze({nome:"artur"});
console.log(pessoaConstante);
pessoaConstante.nome = "nando"
console.log(pessoaConstante);
