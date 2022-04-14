class Lancamento {
    constructor(nome = "genérico", valor = 0) {
        this.nome = nome;
        this.valor = valor;
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.ano = ano;
        this.mes = mes;
        this.lancamento = []
    }
    addLancamento(...lancamento){
        lancamento.forEach(l => this.lancamento.push(l))
    }
    sumario(){
        let valorConsolidado = 0;
         this.lancamento.forEach(l => {
             valorConsolidado += l.valor
         })
        return valorConsolidado;
    }
}

const salario = new Lancamento("salario",4500);
const luz = new Lancamento("luz",-220);

const contas = new CicloFinanceiro(6,2020)
contas.addLancamento(salario,luz);
console.log(contas.sumario())