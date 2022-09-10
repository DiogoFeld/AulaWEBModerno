let numero = 1;

{
    let numero = 2;
    console.log("numero dentro é: " + numero);
}

console.log("numero fora é: " + numero);

{
    let numero = 4;
    console.log("numero do segundo dentro é: " + numero);
}
//let se comporta mais em blocos do que var;