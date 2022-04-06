const saudacao = "Olá"; //Contexto Léxico
console.log(saudacao);

function exec(){
    const saudacao = "HELLO";//Contexto Léxico 2 -> esta definida dentro de um bloco/contexto;
    return saudacao;
}
//objetos sao grupos aninhados de pares nome/valor
console.log(exec());

const cliente = {
    nome: "pedro",
    idade:32,
    peso: 94.4,
    endereco:{
        rua: "Venceslau Brás",
        numero: 123
    }
}

console.log(cliente);