import * as leia from "readline-sync";

const valores: Set<number> = new Set<number>();

for (let i = 0; i < 10; i++){
    const resposta = leia.questionInt("\nDigite um numero: ", {limitMessage: "\n Digite um numero valido"});
    valores.add(resposta);
}

console.log("\nOs numeros digitados foram: " + Array.from(valores).join(", "))