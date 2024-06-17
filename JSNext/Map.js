const pessoas = new Map();

pessoas.set(1,{Nome:"rosana",idade:20})
pessoas.set(2,{Nome:"Maria",idade:12})
pessoas.set(3,{Nome:"Joao",idade:48})

console.log(pessoas)

console.log(pessoas.get(1).idade)



console.log(pessoas.has(1))
console.log("delete" , pessoas.delete(1))
console.log(pessoas.has(1))
console.log(pessoas.size)
