const pai = { nome: "eduardo", corDeCabelo: "careca", gosto: "rock" }

const filha1 = Object.create(pai)
console.log(filha1)
console.log(`prototipo é: ${filha1.__proto__}`)
filha1.corDeCabelo = "Ruiva"
console.log(filha1)
console.log(filha1.__proto__.corDeCabelo)


const filha2 = Object.create(pai, {
    nome: { value: "bia", writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = "Carla";
console.log(`filha ${filha2.nome} tem os cabelos ${filha2.corDeCabelo}`)



console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

console.log("atributos: ")
for (let i in filha2) {
    filha2.hasOwnProperty(i) ?
        console.log(i) : console.log(`tem por herança ${i}`)
}