//o array na verdade é um objeto, mas se organiza a partir de indice;
console.log(typeof Array,typeof new Array,typeof [])

let aprovados = new Array("ana","eduardo")
console.log(aprovados);

aprovados = ["bia","carlos","ana"]
console.log(aprovados);
console.log(aprovados[0]);
aprovados[0] = "Roberto"
console.log(aprovados[0]);
aprovados.push("Anabela")
console.log(aprovados);
console.log(aprovados.length);
console.log(aprovados[8] === undefined);
console.log(aprovados[8] === null);
console.log(aprovados);
aprovados.sort();
console.log(aprovados);

delete aprovados[1];
console.log(aprovados);
aprovados.splice(1,2)
console.log(aprovados);
aprovados.splice(0,1,"NovaPessoa1","novaPessoa2")

console.log(aprovados);