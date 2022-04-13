//usando a notação literal
const obj1 = {
}
console.log(obj1);
console.log(typeof obj1, typeof new Object);

const obj2 = new Object
console.log(obj2);

function Produto(nome, preco, desconto) {
    this.nome = nome;

    this.getPrecoComDesconto = () => {
        return preco * (1-desconto);
    }
}

const p1 = new Produto("caneca",7.55,0.2);
const p2 = new Produto("notebook",3500,0.2);

console.log(p1.getPrecoComDesconto());
console.log(p2.getPrecoComDesconto());

//funcao Factory
function FazerProdultos(nome,salarioBase,faltas){
    return {
        nome,salarioBase,faltas,
        getSalario(){
            return((salarioBase/30) * (30 - faltas))
        }
    }
}
const f1 = FazerProdultos("joao",2000,6)
const f2 = FazerProdultos("maria",1800,1)

console.log("funcionario tem: " + f1.nome + " " +f1.getSalario())
console.log("funcionario tem: " + f2.nome + " " +f2.getSalario())


const filha = Object.create(null)
filha.nome = "Ana";
console.log(filha.nome)

//funcao famosa que retorna um objeto

const fromJson = JSON.parse('{"info" : "sou um JSON"}')
console.log(`O objeto é equivalente à : ${fromJson.info}`)
console.log(fromJson)

