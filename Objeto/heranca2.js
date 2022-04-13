const avo = {attr1: "A"}
const pai = {__proto__: avo, attr2 : "B"}
const filho = {__proto__: pai, attr3 : "C"}

console.log(pai)
console.log(filho)

//procura em seus __proto__ qual deles é equivalete a chave passada
console.log(filho.attr1)

console.log(filho.attr0)
Object.prototype.attr0 = "ZERO"
//seta o prototipo do objeto em zero, após chegar ao __proto__ do avo ele obtem o Object.prototype
console.log(filho.attr0)
console.log(avo.attr0,pai.attr2,filho.attr1)


const carro = {
    valocidadeAtual:0,
    velocidadeMAx:220,
    acelerarMais(delta = 5){
        if(delta + this.valocidadeAtual <= this.velocidadeMAx){
            this.valocidadeAtual  = this.valocidadeAtual  + delta;
        }
        else{
            this.valocidadeAtual = this.velocidadeMAx;
        }
    },
    status(){
        return `${this.valocidadeAtual} de velocidade em Km/h`
    }
}

const ferrari = {
    modelo: "f40",
    velocidadeMAx: "300", //shadowing -> sobrepondo o valor de carro     
}

const volvo = {
    modelo: "v30",
    status(){
        return `${this.modelo} esta a ${super.status() }`
    },
    __proto__:carro
}


Object.setPrototypeOf(ferrari,carro);

ferrari.acelerarMais(100)
ferrari.acelerarMais(100)
ferrari.acelerarMais(50)
console.log(ferrari.status());