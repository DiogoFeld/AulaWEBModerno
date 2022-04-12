// Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
// crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior
// e em quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.

function crescimentoCrianca(altura1, crescimento1, altura2, crescimento2) {
    let years = 0;
    let boolHeight = true;
    crescimento2 = 1 + crescimento2;
    crescimento1 = 1 + crescimento1;


    if (altura1 > altura2) {
        while (boolHeight) {
            altura1 = crescimento1 * altura1
            altura2 = crescimento2 * altura2
            years++
            if (altura1 < altura2) {
                boolHeight = false;
            }
        }
        return console.log(`levou ${years} ano(s) para a segunda ultrapassar a primeira`)
    }
    else if (altura1 < altura2) {
        while (boolHeight) {
            altura1 = crescimento1 * altura1
            altura2 = crescimento2 * altura2
            years++
            if (altura1 > altura2) {
                boolHeight = false;
            }
        }
        return console.log(`levou ${years} ano(s) para a primeira ultrapassar a segunda`)
    }
    else {
        if (crescimento1 === crescimento2) {
            return console.log(`as crianças sempre ficarão com a mesma altura`)
        }
        else {
            altura1 = crescimento1 * altura1
            altura2 = crescimento2 * altura2

            if (altura1 > altura2) {
                return console.log(`A primeira criança ultrapassou a segunda no primeiro ano`)
            }
            else{
                return console.log(`A segunda criança ultrapassou a primeira no primeiro ano`)
            }

        }
    }
}

crescimentoCrianca(110,0.2,100,0.3);
crescimentoCrianca(110,0.2,110,0.2);
crescimentoCrianca(100,0.2,80,0.25);
crescimentoCrianca(90,0.2,100,0.1);
crescimentoCrianca(90,0.2,90,0.1);
crescimentoCrianca(90,0.2,90,0.22);