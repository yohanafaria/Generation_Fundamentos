"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leia = require("readline-sync");
var valores = new Set();
for (var i = 0; i < 10; i++) {
    var resposta = leia.questionInt("\nDigite um numero: ", { limitMessage: "\n Digite um numero valido" });
    valores.add(resposta);
}
console.log("\nOs numeros digitados foram: " + Array.from(valores).join(", "));
