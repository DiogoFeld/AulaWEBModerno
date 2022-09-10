const escola = [{
    turma: "turma1",
    alunos: [{
        nome: "gustavo",
        nota: 4.8
    },
    {
        nome: "maria",
        nota: 8.5
    }]
},
{
    turma: "turma2",
    alunos: [{
        nome: "Rebecca",
        nota: 7.3
    },
    {
        nome: "Roberto",
        nota: 9.1
    }]
}];


const getNotaDoAluno = aluno => aluno.nota;
//cria a funcao
const getNotaDaTurma = turma => turma.alunos.map(getNotaDoAluno)
//chama a funcao

const notas1 = escola.map(getNotaDaTurma)
//chama novamente a funcao
console.log(notas1);
console.log([].concat(notas1)); //nao funciona


Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.app
}


