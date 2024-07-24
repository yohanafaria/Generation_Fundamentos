import * as leia from "readline-sync";

const numeros: number[] = [5, 8, 6, 7, 2, 4, 3, 1, 9, 10]

function acharNumero(numero: number): number{
    for(let i = 0; i < numeros.length; i++){
        if (numeros[i] === numero){
            return i; 
        }   
     }
     return -1;
}

function main(){
    console.log("numeros");
    console.log(numeros.join("\n"));

    leia.question("Digite o numero que deseja encontrar: "), (resposta: string) =>{
        let numeroPedido: number = parseInt(resposta);
        let posicao: number = acharNumero(numeroPedido);

        if (posicao !== -1){
            console.log("O numero " + numeroPedido + "está na posição: " + posicao);
          } else {
            console.log("O numero não foi encontrado!");
          }
    
          }
        }
