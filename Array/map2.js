const carrinho = [
    '{"nome": "borracha", "preco" : 1.15}',
    '{"nome": "caderno", "preco" : 14.15}',
    '{"nome": "kit de Lapis", "preco" : 21.15}',
    '{"nome": "caneta", "preco" : 0.7}'
]
const carrinho2 = []
for (let i in carrinho) {    
    carrinho2.push(JSON.parse(carrinho[i]).preco)
}
console.log(carrinho2);

