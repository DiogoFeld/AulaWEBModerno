function area(largura,altura){
    const area = largura * altura;
    if(area > 20){
        console.log("Acima do valor permitido, passou de " + area)
    }
    else{
        return area;
    }
}


function checkArea(largura,altura){
    if(!!area(largura,altura)){
        return(`Valor aceitável é: ${area(largura,altura)}`);
    }
    else{
        return "Estrapolou o valor permitido";
    }
}


console.log(area(2,2));
console.log(area(2,12));
console.log(area(20,1.5));//ele irá retornar undefined por default -> o quue é interressante


console.log(checkArea(2,2));
console.log(checkArea(2,12));
console.log(checkArea(20,1.5));
