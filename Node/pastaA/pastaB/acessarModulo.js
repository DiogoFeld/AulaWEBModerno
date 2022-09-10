const moduleA = require("../../moduleA") // ../mudar de pasta  
console.log(moduleA.ateLogo);

const saudacao = require("saudacao");
console.log(moduleA.ola); //irá bucar automaticamente no Index.js da pasta selecionada. 

const C = require("./pastaC");//procura automaticamente o index
console.log(C.ola2)


const http = require("http");
http.createServer((req,res) => {
    res.write("bom dia")
    res.end();
}).listen(8080)


