const a = 1
const b = 2
const c = 3 


const obj2 = {a : a,b:b,c:c}
const obj1 = {a,b,c}

console.log(obj1,obj2);


//notacao literal
const nota = "nota";
const valorNota = 7.54;

const obj3 = {};
obj3[nota] = valorNota;
console.log(obj3);

const obj4 = {[nota]: valorNota}
console.log(obj4);

const obj5 ={
    funcao1: function(){
        //funcao
    },
    functio2(){

    }
}