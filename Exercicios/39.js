// Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo 
// que o primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa 
// e assim sucessivamente. Faça a troca sem utilizar uma variável auxiliar.

function changeArray(array1,array2){
    [array1,array2] = [array2,array1]

    console.log(`array1 é ${array1}`)
    console.log(`array2 é ${array2}`)
}
changeArray([1,1,1,1,1,1],[3,3,3,3,3,3])
