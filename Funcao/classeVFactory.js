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
//em browser o this aponta para aquele que chama. no caso do contrutor ele retorna undefined



const pessoa = (nome) => {
    return    {
        falar:  () => console.log(`meu nome é ${nome}`)
    }
}
const j = pessoa("joao");
j.falar();