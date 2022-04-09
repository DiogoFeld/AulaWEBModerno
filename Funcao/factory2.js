// factorySimples

function criarProdulto(newNome= "standart",newPreco= "50"){
    //return passa um objeto criado pela fabrica;
    return{
        nome: newNome,
        preco: newPreco,
        desconto:0.3,
        CheckPreco:function(){
            return this.preco * this.desconto
        }  
    } 
}

const obj = criarProdulto("dove 4L",40);
console.log(obj.CheckPreco())


console.log(criarProdulto("dove 4L",40))