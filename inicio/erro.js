function PessoaGritando(obj) {
    try {
        console.log(obj.nome.toUpperCase() + "!!!");
    }
    catch (error) {
        console.log("erro Na função")
        tratarErro(error);
    }
    finally {
        console.log("final")
    }
}

function tratarErro(error) {
    //throw é jogado antes do bloco em que esta inserido.
    throw {
        nome: errorId.name,
        msg: errorId.message,
        date: new Date
    }
}

const obj = {
    name: "roberto"
}

PessoaGritando(obj);



