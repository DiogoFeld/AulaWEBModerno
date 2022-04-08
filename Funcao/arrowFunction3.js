let compararParametro = function(parametro){
    console.log(this === parametro)
}

compararParametro(global)
//em browser o global é a propria windown

const obj = {}
compararParametro = compararParametro.bind(obj);
compararParametro(global)
compararParametro(obj)

let comparaParametroArrow = (parametro) => console.log(this === parametro)
comparaParametroArrow(global);
//arrow function aponta para o objeto corrente dentro da função

comparaParametroArrow(this);
comparaParametroArrow(module.exports);
comparaParametroArrow = comparaParametroArrow.bind(obj)
comparaParametroArrow(obj);
//nao sobreescreva o ponto de referncia THIS que arrow function mantém
