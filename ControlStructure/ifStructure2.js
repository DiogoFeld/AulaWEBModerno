function teste1(numer1) {
    if (numer1 > 7)
        console.log(numer1);
    console.log("final");

}

teste1(6);
teste1(8);
//indentação - divisão entre sentenças;
//o ";" separa a sentença dos demais
function teste2(numer) {
    if (numer > 7);{//codigo "zuado" devido o ponto e virgula;
        console.log(numer);
        console.log("final");
    }
}

teste2(6);
teste2(8);