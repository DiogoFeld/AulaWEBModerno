const quasseArray = {
    0: "ana",
    1: "rafael",
    2: "Roberttt"
}

console.log(quasseArray);

console.log(Object.values(quasseArray))

//transformando o objeto criado em uma objeto:

Object.defineProperty(quasseArray,"toString",{
    value:function(){
        return Object.values(this)
    },
    enumerable: false
})

console.log(quasseArray.toString());
