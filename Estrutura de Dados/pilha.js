"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// importar a classe pilha
var stack_1 = require("./stack");
function main() {
    var stack = new stack_1.Stack();
    var readline = require('readline-sync');
    while (true) {
        console.log("\nMenu:");
        console.log("1: Adicionar um novo livro na pilha");
        console.log("2: Listar todos os livros da Pilha");
        console.log("3: Retirar um livro da pilha");
        console.log("0: O programa deve ser finalizado");
        var option = readline.question("Digite uma opção: ");
        switch (option) {
            case '1':
                var nomeLivro = readline.question("Digite o nome: ");
                stack.push(nomeLivro);
                console.log("\nPilha:");
                stack.printStack();
                console.log("Livro adicionado!");
                break;
            case '2':
                console.log("\nLista de Livros na Pilha:");
                stack.printStack();
                break;
            case '3':
                if (stack.isEmpty()) {
                    console.log("\nA Pilha está vazia!");
                }
                else {
                    var livroRetirado = stack.pop();
                    console.log("\nPilha:");
                    stack.printStack();
                    console.log("O Livro \"".concat(livroRetirado, "\" foi retirado da pilha!"));
                }
                break;
            case '0':
                console.log("\nPrograma Finalizado!");
                return;
            default:
                console.log("\nOpção inválida. Tente novamente.");
        }
    }
}
// Execução do programa
main();
