// Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e 
// que possua três casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. 
// Caso kiwi, retorne: “Estamos com escassez de kiwis”. Caso melancia, retorne: “Aqui está,
// são 3 reais o quilo”. Teste com estas três opções .Crie também um default, que retornará
//  uma mensagem de erro no console.


function frutaria(fruta) {
    switch (fruta) {
        case "maçã":
            return "Não vendemos esta fruta aqui";
            break;
        case "kiwis":
            return "Estamos com escassez de kiwis";
            break;
        case "melancia":
            return "Aqui está, são 3 reais o quilo";
            break;
        default:
            return "Erro, fruta nao encontrada";
    }
}


console.log(frutaria("maçã"))
console.log(frutaria("kiwis"))
console.log(frutaria("melancia"))
console.log(frutaria("jaca"))