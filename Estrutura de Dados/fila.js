"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// importação da classe queue, que modela e implementa a fila
var queue_1 = require("./queue");
// criando a função principal
function main() {
    var queue = new queue_1.Queue();
    var leia = require("readline-sync");
    while (true) {
        console.log("nMenu: ");
        console.log("1: Adicionar um novo Cliente na fila");
        console.log("2: Listar todos os Clientes na fila");
        console.log("3: Chamar (retirar) uma pessoa da fila");
        console.log("0: O programa deve ser finalizado");
        var option = leia.question("Digite uma opção: ");
        switch (option) {
            case "1":
                var nome = leia.question("Digite o nome: ");
                queue.enqueue(nome);
                console.log("\nFila:");
                queue.print();
                console.log("Cliente Adicionado!");
                break;
            case "2":
                console.log("\nLista de Clientes na Fila:");
                queue.print();
                break;
            case "3":
                if (queue.isEmpty()) {
                    console.log("\nA Fila está vazia!");
                }
                else {
                    var cliente = queue.dequeue();
                    console.log("\nFila:");
                    queue.print();
                    console.log("O Cliente " + cliente + "foi Chamado!");
                }
                break;
            case "0":
                console.log("\nPrograma Finalizado!");
                return;
            default:
                console.log("\nOpção inválida. Tente novamente.");
        }
    }
}
main();
