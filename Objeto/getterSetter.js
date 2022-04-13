const sequencia = {
    _valor: 1, //convençao, uma variavel.
    get Valor() {
        return this._valor++
    },
    set Valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}


console.log(sequencia.Valor,sequencia.Valor)
sequencia.Valor = 1000
console.log(sequencia.Valor)




