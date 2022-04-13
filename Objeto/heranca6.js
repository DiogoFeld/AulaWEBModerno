function Aula(nome,videoId){
    this.nome = nome;
    this.videoId = videoId;
}

const aula1 = new Aula("aula1", 14)
const aula2 = new Aula("aula2", 15)
console.log(aula1,aula2)



function novo(f,...param){
    const obj = {}
    obj.__proto__ = f.prototype;
    f.apply(obj,param);
    return obj;
}

const aula3 = novo(Aula,"aula1", 14)
const aula4 = novo(Aula,"aula2", 15)
console.log(aula3,aula4)
