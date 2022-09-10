// Desenvolva uma função que receba uma string como parâmetro e retorne essa
// string somente com as consoantes, ou seja, sem as vogais
let text = "Na terra de mordor, onde as sombras se deitam"
String.prototype.Regex = function(regex){
    return this.replace(regex," ")
}
const reg = /[aeiou]/ig
console.log(text.Regex(reg))




