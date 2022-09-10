{{{
    var exp1 = "será??"
    console.log(exp1);
}}}
console.log(exp1);
//o escopo da variavel é estendindo


function teste(){
    var local = 123;
    console.log(local);
}
teste();
//console.log(local);//erro, o escopo de "local" nao é estendindo a essa parte do código

