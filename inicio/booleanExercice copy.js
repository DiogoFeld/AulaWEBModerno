let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);


isAtivo = 1
console.log("São os verdadeiros");
console.log(!! isAtivo);
console.log(!!3);
console.log(!!" ");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("os falsos");
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo == false));

console.log("pega o verdadeiro");
console.log(!!("" || null || 0 || "sim"));

//seleciona o 'correto'
let nome1 = ""
console.log(nome1 || "desconhecido");
//no exemplo o nome1 sai como falso diante da loja do js.

