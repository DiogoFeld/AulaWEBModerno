// Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro
// objeto que corresponde ao ao objeto recebido como parâmetro, porém com as 
// posições das chaves e valores invertidas

Object.prototype.Inverter = function () {
    const obj2 = {}
    Object.entries(this).forEach(([chave, valor]) => { //uso de destructor em parenteses
        obj2[valor] = chave
    })
    return obj2;
}

const obj = {
    idade: 24, nome: "joao", profissao: "atendente"
}
console.log(obj.Inverter())
