let primeiroNumero = parseInt((prompt("Digite o primeiro número da lista (inteiro e positivo)")));
let ultimoNumero= parseInt((prompt("Digite O ultimo número da lista (inteiro e positivo)")));
let incremento= parseInt((prompt("Digite um incremento para aumentar ou diminuir os números (inteiro e positivo)")));


for(let resultado = primeiroNumero; resultado <= ultimoNumero; resultado += incremento){
    console.log(resultado);
}
