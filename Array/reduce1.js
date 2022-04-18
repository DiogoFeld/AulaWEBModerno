const aluno = [
    { nome: "joao", nota: 7.4, bolsista: false },
    { nome: "joana", nota: 8.4, bolsista: true },
    { nome: "maria", nota: 4.9, bolsista: true },
    { nome: "tulio", nota: 9.2, bolsista: false }
]

const resultado = aluno.map(a => a.nota).reduce(function(acomulador,atual){
    console.log(acomulador,atual)
    return acomulador + atual;
})
console.log(resultado)
