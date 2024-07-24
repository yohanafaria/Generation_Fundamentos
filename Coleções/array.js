"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const leia = require("readline-sync");
var numeros = [5, 8, 6, 7, 2, 4, 3, 1, 9, 10];

function acharNumero(numero) {
    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] === numero) {
            return i;
        }
    }
    return -1;
}
function main() {
    console.log("numeros");
    console.log(numeros.join("\n"));
    leia.question("Digite o numero que deseja encontrar: ");
        var numeroPedido = parseInt(resposta);
        var posicao = acharNumero(numeroPedido);
        if (posicao !== -1) {
            console.log("O numero " + numeroPedido + "está na posição: " + posicao);
        }
        else {
            console.log("O numero não foi encontrado!");
        }
    }
module.exports = {
    acharNumero: acharNumero,
    main: main
}

