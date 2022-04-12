// Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e 
// calcule o valor a ser pago por aquele lanche. Considere que a cada execução somente será
// calculado um item. Use o comando switch. Crie um caso default para produto não existente.

function lanchonete(codigo, quantidade) {
    let total = 0;

    switch (codigo) {
        case 100:
            total = 3 * quantidade;
            total = "R$" + total;
            return total;
            break;
        case 200:
            total = 4 * quantidade;
            total = "R$" + total;
            return total;
            break;
        case 300:
            total = 5.5 * quantidade;
            total = "R$" + total;
            return total;
            break;
        case 400:
            total = 7.5 * quantidade;
            total = "R$" + total;
            return total;
            break;
        case 500:
            total = 3.5 * quantidade;
            total = "R$" + total;
            return total;
            break;
        case 600:
            total = 2.8 * quantidade;
            total = "R$" + total;
            return total;
            break;
        default:            
            return "404 code not found"

    }
}
console.log(lanchonete(200,4))
console.log(lanchonete(400,5))
console.log(lanchonete(100,2))