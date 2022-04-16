const func = [];

for(var i = 0; 10 > i; i++){
    func.push(function(){
        console.log(i);
    });   
}

func[2]();
//chama a função
func[8]();
//o escopo da função esta sempre como i, que no caso vale 10 para ambos os parametros.

