//em funções
function rad({min = 0, max = 1000}){
    const valor = Math.random() *  (max - min) + min;
    return Math.floor(valor);
}

 const obj = {max: 50, min: 40}
//const obj = {max: 50}//aqui ele assume o valor de min, que é 0;
console.log(rad({min:40}));
console.log(rad(obj));
console.log(rad());