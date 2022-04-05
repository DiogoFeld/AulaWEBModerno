const valores = [4.8,1.5,4.3];

console.log(valores[1]);
console.log(valores[0]);
console.log(valores[6]);

valores[10] = 8.1;
valores[4] = 8.1;
console.log(valores[10]);
console.log(valores);
console.log(valores.length);

const diferentes = [];
diferentes.push({id:3},false,null,"teste");
//DA PARA MISTURAR OS TIPOS DELE;
console.log(diferentes);

console.log(valores);
console.log(valores.pop());
//retira o ULTIMO VALOR DE UM ARRAY - NO CASO O 8.1;
console.log(valores);




