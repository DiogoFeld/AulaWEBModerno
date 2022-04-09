//closure é o escopo quando uma função é declarada
//essde escopo permitea funcao acesasar e manipular EXTERNAS a funcao

//contexto léxico em ação!
const global =  "global";


function fora(){
    const x = "local";
    function dentro() {
        return x;
    }
    return dentro;
}

const minhaFuncao = fora();
console.log(minhaFuncao())