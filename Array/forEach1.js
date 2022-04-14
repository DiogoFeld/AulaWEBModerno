const aprovados = ["maria","felipe","Renan","carla"]

aprovados.forEach(function (nome,indice,array){
    console.log(`${indice+1} é do aprovado ${nome}`)
    console.log(array);
})

const exibirAprovador = (aprovados,indice) => console.log(aprovados,indice+1);
aprovados.forEach(exibirAprovador)
