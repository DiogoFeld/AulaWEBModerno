console.log(typeof console);

const obj1 = {};
obj1.nome = "RONALDO, SIIIIM";
// obj1["nome"] = "Ronaldinho, VBAMOS"; //outras notações irão sobreescrever a notação original.

console.log(typeof console);
console.log(obj1.nome);


function obj(nome){
    this.nome = nome;
    this.exec = function(){
        console.log("..executando");
    };
}


const obj2 = new obj("cadeira");
console.log(obj2.nome);
console.log(typeof  obj2.nome);
obj2.exec();
