// 1 exercicio
// Tem que chamar a função no console e colocar uma string em ""
var palavra;
function ReceberString(palavra) {
    var contagem = 0;
    for (var index = 0; index < palavra.length; index++) {
        if (palavra.charAt(index) == "a" || palavra.charAt(index) == "e" || palavra.charAt(index) == "i" || palavra.charAt(index) == "o" || palavra.charAt(index) == "u") {
            contagem++;
        }
    }
    console.log(contagem);
}
// 2 exercicio
// Tem que chamar a função no console e colocar uma string em ""
var string;
function ReceberPalavra(string) {
    var numero = 0;
    var numero1 = 0;
    if (string.length % 2 == 0) {
        numero = string.length / 2;
        numero1 = numero - 1;
        console.log(string.charAt(numero1) + string.charAt(numero));
    }
    else {
        numero = string.length / 2;
        console.log(string.charAt(numero));
    }
}
//3 exercicio
// Esse foi o único jeito q eu consegui fazer mas ainda estou testando
// como fazer de outros jeitos!!
function ReceberNumeros(numero) {
    var numero1 = parseInt(prompt());
    var numero2 = parseInt(prompt());
    var numero3 = parseInt(prompt());
    var numero4 = parseInt(prompt());
    var numero5 = parseInt(prompt());
    var numeros = [numero1, numero2, numero3, numero4, numero5];
    console.log(numeros.sort(function (one, two) { return (one > two ? -1 : 1); }));
}
