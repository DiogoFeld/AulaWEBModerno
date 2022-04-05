const escola = "Cod3r";

console.log(escola.charAt(4));
// [0,1,2,3,4] = [C,o,d,3,r]
console.log(escola.charAt(6));
//vazio

console.log(escola.charCodeAt(3));
//valor na tabela UNICODE

console.log(escola.substring(1,3));
//substring vai até o 3 mas não o inclui

console.log("Escola: ".concat(escola.concat("!")));

console.log(escola.replace(3,"e"));


console.log("morangos,laranjas,peiras".split(","));