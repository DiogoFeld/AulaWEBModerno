console.log(typeof Number)
console.log(typeof String)
console.log(typeof Array)

String.prototype.reverse = function(){
    return this.split("").reverse().join("");
}

console.log("Escola Cod3r é um tanto bagunçada, mas legal".reverse())

Array.prototype.first = function(){
    return this[0];
}

console.log([4,1,2,4,8,4].first ())

String.prototype.toString = function(){
    return "lascou tudo"
}
console.log("Escola Cod3r".reverse())
