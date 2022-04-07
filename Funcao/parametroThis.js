function Soma(){
    let soma = 0;

    //arguments são os parametros passados pela variavel
    for(i in arguments){
        soma += arguments[i];
    }
    
    return soma;
    
}


console.log(Soma(4.5,7.8,2,1.4,5,9))
//soma todos eles
console.log(Soma(4.5,7.8,2,1.4,5,9,"teste"))
//concatena a String Teste


