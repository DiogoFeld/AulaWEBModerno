const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require("axios")



axios.get(url).then(response => {
    const funcionario = response.data    
    
    console.log(funcionario);

    console.log("--------")
    const func = funcionario.filter(mulheres).filter(chineses).reduce(menorSalario)
    console.log(func);

})


const mulheres = (f) => f.genero == "F"
const chineses = (f) => f.pais == "China"
const menorSalario = (a,b) => a.salario < b.salario ? a: b


