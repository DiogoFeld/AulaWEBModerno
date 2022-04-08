function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++;
        console.log(this.idade)
    }, 1000)
    //difernte do prévio, que usava bind, a arrow function nao perde o objeto inserido
}



