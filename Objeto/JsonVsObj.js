const obj = {
    a: 1,
    b:2,
    c:3,
    soma(){
        return a+b+c
    }

}

console.log(JSON.stringify(obj))
// console.log(JSON.parse("{a:1,b:2,c:3}"))
//console.log(JSON.parse("{'a':1,'b':2,'c':3}"))
console.log(JSON.parse('{"a":1,"b":2,"c":3}'))
const jsonParse = JSON.parse('{"a":1,"b":2,"c":3}')
console.log(jsonParse.a);
console.log(JSON.parse('{"a":1,"b":2,"c":3,"d":{"b":4},"e":[2,4,8,6,4]}'))