function Carro(valocidadeMaxima = 200, delta = 5){
    let valocidadeAtual = 0;
    this.acelerar = function(){
        if(valocidadeAtual + delta <= valocidadeMaxima){
            valocidadeAtual += delta;
        }
        else{
            valocidadeAtual = valocidadeMaxima;
        }
    }
    //metodo publico
    this.getVelocidadeAtual = function(){
        return valocidadeAtual;
    }
}


const uno = new Carro;
uno.acelerar();
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(400,20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual())


console.log(typeof Carro)
console.log(typeof ferrari)


