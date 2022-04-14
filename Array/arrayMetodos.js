const pilotos = ["Véteu","ShoweMarker", "Raikeinen","Massa"]
console.log(pilotos);
pilotos.pop(); //massa sai da lista
console.log(pilotos);
pilotos.push("Verstapi"); //massa sai da lista
console.log(pilotos);
pilotos.shift() //remove o primeiro da lista
console.log(pilotos);
pilotos.unshift() //adicionar o primeiro da lista
console.log(pilotos);

//splice pode adicionar e remover elementos
pilotos.splice(2,0,"Massa","Bottas")
console.log(pilotos);
//adicionar 
//slice pega UM pedaço, a partir do indice passa nos parametros
const novosPilotos = pilotos.slice(3) 
console.log(`novos pilotos = ${novosPilotos}`);
//slice pega UM pedaço, a partir do indice passa nos parametros e até o valor limite, o segundo parametro
const outrosPilotos = pilotos.slice(2,5)
console.log(`outros pilotos = ${outrosPilotos}`);
