// Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou
//  False caso todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam 
//  contidos em ambas palavras.

function ComparacaoString(string1, string2) {
    string1 = string1.toUpperCase();
    string2 = string2.toUpperCase();
    let word = null
    let boolResult = true;
    console.log(`numero1 ${string1}, numero 2 ${string2}`)

    for (let i = 0; i <= string1.length; i++) {
        word = string1[i];
        if (!string2.includes(word)) {
            console.log(string2 + "- " + word);


            boolResult = false;
        }
    }

    if (boolResult) {
        console.log(`caracteres são iguais`)
    }
    else {
        console.log(`caracteres não são iguais`)
    }
}

ComparacaoString("aaaa", "bbbba");
ComparacaoString("aaaa", "bbbb");