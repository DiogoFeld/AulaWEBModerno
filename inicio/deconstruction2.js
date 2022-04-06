const a = [10];
console.log(a);

const [n1,,n3,,n5,n6 = 6] = [10,7.9,8];
console.log(n1,n3,n5,n6);

const[,[,nota]]  = [[,8,8],[9,6,4]]
console.log(nota);
//estrai o SEGUNDO valor do SEGUNDO ARRAY;