const imprimirResult = function(nota){
    if(nota >= 7){
        console.log("Aprovado com ", nota);
    }
    else{
        console.log("reprovado com ", nota);
    }
}


imprimirResult(10.1);
imprimirResult(4);
imprimirResult("epo");//nao entenderá a comparação com o epo e então vai pro else;