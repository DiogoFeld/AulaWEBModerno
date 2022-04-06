function Compras(trab1,trab2){
    const comprarSorvete = trab1 || trab2;
    const comprarTV50 = trab1 && trab2;
    const comprarTV32 = trab1 != trab2;
    const manterSaudavel = !comprarSorvete;

    return {comprarSorvete ,comprarTV50,comprarTV32,manterSaudavel};    
}


console.log(Compras(true,false));
console.log(Compras(false,false));
console.log(Compras(true,true));
console.log(Compras(false,true));