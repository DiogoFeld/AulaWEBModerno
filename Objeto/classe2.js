class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome;
    }
}
//extends, herança em pai com avo
class Pai extends Avo {
    constructor(sobrenome, profissao = "professor") {
        super(sobrenome);
        this.profissao = profissao;
    }
}
class Filho extends Pai {
    constructor() {
        super("Silva");
    }
}
const f = new Filho
console.log(f)
