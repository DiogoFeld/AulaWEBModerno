// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá,
// enquanto que o segundo será o número de vezes que haverá repetição. Um array será retornado.


function ArrayBuilder(elemento,loopTimes){
    let array = [];
    for(let counter = 0; counter < loopTimes; counter++)    {
        array.push(elemento)
    }
    return array;
}


console.log(ArrayBuilder(5,8))