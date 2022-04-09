class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`meu nome é ${this.nome}`)
    }
}
const maria = new Pessoa("maria");
maria.falar();
//em browser o this aponta para aquele que chama, no caso o document


//de classe para funcao
function Pessoa2(nome) {
    this.nome = nome,
        this.falar = function () {
            return console.log(`Meu nome é ${this.nome}`)
        }
    console.log(this)
}

const Virgo = new Pessoa2("virgo");
Virgo.falar();



const pessoa = (nome) => {
    return {
        falar: () => console.log(`meu nome é ${nome}`)
    }
}
const j = pessoa("joao");
j.falar();

console.log(Pessoa2("yes"))