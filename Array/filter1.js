const produtos = [
    {nome: "copo de plastico",  preco: 8.4, fragil: false},
    {nome: "copo de vidro",  preco: 15.47, fragil: true},
    {nome: "copo de metal",  preco: 48.7, fragil: false}
]


console.log(produtos.filter(function(obj){
    return obj.nome.includes("vidro")
}))


const caro = p => p.preco > 20;
const fragil = p => p.fragil;

console.log("produtos Caros");
console.log(produtos.filter(caro))

console.log("produtos frageis");
console.log(produtos.filter(fragil))