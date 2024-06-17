let uu = 7

function esperarPor(tempo = 2000,soma = 1) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            console.log("executando a tarefa")
            
            resolve(uu + soma)
        }, tempo)
    });
}

console.log("start")
esperarPor(3000,1)
    .then(esperarPor(6000,4))
    .then(esperarPor(9000,9))
    .then(result => console.log(result))

console.log("continua")
