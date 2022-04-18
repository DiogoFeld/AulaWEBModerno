// Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
// possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você
// está desenvolvendo no momento é a de somar o total das despesas.
// Crie uma função que receba um array de produtos e retorne o total das despesas.

const produtos = [
    { nome: "chave", categoria: "A", preco: 8 },
    { nome: "cadeira", categoria: "B", preco: 5 },
    { nome: "mesa", categoria: "B", preco: 13 },
    { nome: "garrafa", categoria: "C", preco: 41 }
]

const getPreco = a => a.preco
const sumProdutos = (a,b) => a + b

function getTotalPreco(array){
    return array.map(getPreco).reduce(sumProdutos)
}


console.log(getTotalPreco(produtos))
