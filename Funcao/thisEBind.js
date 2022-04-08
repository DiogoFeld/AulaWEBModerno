const pessoa = {
    saudacao : "bom dia",
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar();

const falar = pessoa.falar();
console.log(falar);


//bind "amarra" o this para o objeto/variavel que será aplicado.
const falarDePessoas = pessoa.falar.bind(pessoa);
falarDePessoas();

