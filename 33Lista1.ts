// 1 exercicio
// Tem que chamar a função no console e colocar uma string em ""
let palavra :string 
function ReceberString(palavra: string) {
    let contagem = 0
    for (let index = 0; index < palavra.length; index++) {
        if (palavra.charAt(index) == "a" || palavra.charAt(index) == "e" || palavra.charAt(index) == "i" || palavra.charAt(index) == "o" || palavra.charAt(index) == "u") {
            contagem++
        }   
    }
    console.log(contagem)
}

// 2 exercicio
// Tem que chamar a função no console e colocar uma string em ""

let string :string 
function ReceberPalavra(string:string) {
    let numero = 0
    let numero1 = 0
    if (string.length % 2 == 0) {
        numero = string.length / 2
        numero1 = numero - 1
        console.log(string.charAt(numero1) + string.charAt(numero))
    }else {
        numero = string.length / 2
        console.log(string.charAt(numero))
    }
}

//3 exercicio
// Esse foi o único jeito q eu consegui fazer mas ainda estou testando
// como fazer de outros jeitos!!

function ReceberNumeros(numero: number) {
    let numero1 = parseInt(prompt())
    let numero2 = parseInt(prompt())
    let numero3 = parseInt(prompt())
    let numero4 = parseInt(prompt())
    let numero5 = parseInt(prompt())
    let numeros = [numero1, numero2,numero3,numero4,numero5]
    console.log(numeros.sort((one, two) => (one > two ? -1 : 1)))
}
