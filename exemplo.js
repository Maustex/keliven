// string

let primeiroNome = "Chico"
let ultimoNome = "Buarque"
let NomeCompleto = primeiroNome + " " + ultimoNome

console.log(NomeCompleto)

// numbers

let numero1 = 2
let numero2 = 20

let soma = numero1 + numero2
let subtracao = numero1 - numero2
let divisao = numero1 / numero2
let multiplicacao = numero1 * numero2

console.log(soma, subtracao, divisao, multiplicacao)

// booleanos

let estaChovendo = true
if(estaChovendo){
    console.log("Está chuvendo")
}else{
    console.log("Não está chuvendo")
}

// Null e undefined

let resposta = null
let nota

console.log(resposta, nota)

// Symbol

let idUnico = Symbol()

let produto = {
    [idUnico]: 1234
}
console.log(produto[idUnico])

// bigInt

let grandeInteiro = BigInt("6709259537247826409831526703982")
let numero = 3568231567878241049837
let numero3 = grandeInteiro
console.log(grandeInteiro)
console.log(numero)
console.log(numero3)