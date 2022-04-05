let qualquer = "Variavel de texto Legal";
console.log(qualquer);
console.log(typeof qualquer);

qualquer = 3.44184;
console.log(qualquer);
console.log(typeof qualquer);

let valor = "";
let numero = 1;
let pqp = false;
//tipagens podem flutuar;


const peso1 = 1.0;
const peso2 = Number("2.1");
console.log(peso2);
console.log(Number.isInteger(peso2));


const avali1 = 2.5878;
const avali2 = 7.1474;

const total = (avali1 * peso1) + (avali2 * peso2);
const media = total / (peso1 + peso2);

console.log("média é: " + media.toFixed(2));
console.log("média é, em string: " + media.toString(2));
//término em 2 sgnifica transformação em binario


