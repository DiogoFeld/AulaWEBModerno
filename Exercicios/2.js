// Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).


function triangleIndentifier(a,b,c){
    if(equivalencia(a,b)){
        if(equivalencia(b,c))        {
            console.log("Equilátero")
        }
        else{
            console.log("isoceles")
        }
    }
    else if(a === c){
        if(equivalencia(b,c))        {
            console.log("Equilátero")
        }
        else{
            console.log("isoceles")
        }
    }
    else if(c === a){
        if(equivalencia(b,c))        {
            console.log("Equilátero")
        }
        else{
            console.log("isoceles")
        }
    }
    else{
        console.log("escaleno")
    }
}

function equivalencia(a,b){    
    return a === b;
}


triangleIndentifier(3,3,3)
triangleIndentifier(3,3,4)
triangleIndentifier(5,3,4)