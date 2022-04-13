const pessoa = {
    nome: "rebecca",
    idade: 2,
    peso: 12
}

console.log(Object.keys(pessoa))
//pega as chaves do objeto
console.log(Object.values(pessoa))
//pega os valores do objeto
console.log(Object.entries(pessoa))
//pega um array de arrays de chave e favor

Object.entries(pessoa).forEach(([chave, valor]) => { //uso de destructor em parenteses
    console.log(`chave:  ${chave[0]}: valor: ${valor[1]}`)
})

Object.defineProperty(pessoa, "dataDeNascimento", {
    enumerable: true,
    writable: false,
    value: "01/01/2019"
})
console.log(pessoa.dataDeNascimento)
pessoa.dataDeNascimento = "02/02/2020"
//setado em falso para writable, não deixa sobreescrever
console.log(pessoa.dataDeNascimento)

console.log(Object.keys(pessoa))
const dest =  {a:1}
const o1 =  {b:2}
const o2 =  {c:3, a:4}
const obj =  Object.assign(dest,o1,o2);
console.log(obj)
//sobrescreve o a presente no elemento dest






