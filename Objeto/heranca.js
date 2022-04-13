const ferrari = {
    modelo: "f40",
    vMaxima: 325
}

const volvo = {
    modelo: "v40",
    vMaxima: 220
}

console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);
console.log(volvo.__proto__ === ferrari.__proto__);//também iguais
console.log(Object.prototype.__proto__);//também iguais

function MeuObjeto(){}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)


