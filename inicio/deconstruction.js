const pessoa = {
    nome: "ana",
    idade: 32,
    endereço:{
        rua:"machaado de assis",
        numero: 457
    }
}
console.log(pessoa);
//console.log(nome,idade);//ira falhar pois ainda nao foi extraido

const{nome,idade} = pessoa;
//duas chaves em seguida representam a extração -> tirar do objeto
// o atributo nome e idade do objeto pessoa
 console.log(nome,idade);

 const{nome: i,idade: n} = pessoa;
 console.log(i,n);
 console.log(pessoa);

 const{sobrenome,beHumorada = true} = pessoa;
 console.log(sobrenome,beHumorada);

 const{endereço:{logradouro,numero,cep}} = pessoa
 console.log(logradouro,numero,cep);
 console.log(pessoa);


