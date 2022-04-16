const func = [];

for(let i = 0; 10 > i; i++){
    func.push(function(){
        console.log(i);
    });   
}

func[2]();
//chama a função
func[8]();
//o escopo da função agora é definido pelo valor que foi colocado em i
//devido a separação/escopo de blocos que o let deixa

