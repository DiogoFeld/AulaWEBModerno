Number.prototype.entre = function(inicio,fim){
    return this >= inicio && this <= fim;
}


const imprimirResult = function(nota){
    if(nota.entre(9,10)){
        console.log("Quadro de honra")
    }else if(nota.entre(7,8.99)){
        console.log("Passou")
    }else if(nota.entre(4,6.99)){
        console.log("Recuperação")
    }else if(nota.entre(0,3.99)){
        console.log("Reprovação")
    }
    else{
        console.log("Nota Inválida")
    }    
}


imprimirResult(9.6);
imprimirResult(8.6);
imprimirResult(6.4);
imprimirResult(3.6);
imprimirResult(-1);