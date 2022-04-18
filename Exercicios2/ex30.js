// Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de 
// cada estudante estarão num array, conforme exemplo abaixo. Você deverá calcular
// a média da nota de cada aluno e retornar um objeto com os atributos nome e media,
//  que indica o aluno que teve o melhor desempenho nas notas.

const obj = {
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75    
}

function classeAula(obj) {
    let obj2 = {}

    Object.entries(obj).forEach(([chave, valor]) => { //uso de destructor em parenteses
        obj2[chave] = MediaArray(valor);
    })
    console.log(obj2)
    obj2 = getBigger(obj2)

    return obj2;
}

function MediaArray(array) {
    let value = array.reduce(function (a, b) {
        return a + b;
    })
    value /= array.length;
    return value
}
console.log(classeAula(obj))

function getBigger(obj) {
    values = []
    for (atrib in obj) {
        values.push(obj[atrib])
    }
    values = Math.max(...values)
    for (atrib in obj) {
        if(obj[atrib] < values){
            delete obj[atrib];
        }
    }
    return obj
}