function boaNoticia(nota) {
    if (nota >= 7) {
        console.log("aprovado com: ", nota)
    }
}

boaNoticia(8);
boaNoticia(6.8);

function SeeuForVerdade(valor){
    if(valor){
        console.log("È verdade que....", valor);
    }
}

//pode passar objetos booleanos que ele irá entender.
SeeuForVerdade(null);
SeeuForVerdade(true);
SeeuForVerdade(undefined);
SeeuForVerdade(NaN);
SeeuForVerdade("");
SeeuForVerdade(0);
SeeuForVerdade(-1);
SeeuForVerdade(" ");
SeeuForVerdade("?");
SeeuForVerdade([]);
SeeuForVerdade([1,2]);
SeeuForVerdade({});

