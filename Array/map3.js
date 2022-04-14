Array.prototype.map2 = function(callback){
    for(let i = 0; i < this.length;i++){
        callback(this[i]);
    }
}
const carrinho = [
    '{"nome": "borracha", "preco" : 1.15}',
    '{"nome": "caderno", "preco" : 14.15}',
    '{"nome": "kit de Lapis", "preco" : 21.15}',
    '{"nome": "caneta", "preco" : 0.7}'
]
carrinho.map2(function(nome){console.log(nome)})
const carrinho2 = []
for (let i in carrinho) {    
    carrinho2.push(JSON.parse(carrinho[i]).preco)
}
console.log(carrinho2);