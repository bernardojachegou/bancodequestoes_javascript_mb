// Desafio 04: Mais Menos (Porcentagem de elementos)
// Necessitamos uma função maisMenos que receba um array e retorne outro com os seguintes três números:
// na primeira posição, a fração de números que são positivos
// na segunda posição, a fração de números que são zero
// na última posição, a fração de números que são negativos
// Por exemplo, maisMenos([1, 2, 0, -1]) deveria retornar[0.5, 0.25, 0.25], devido a que há 50 % de positivos, 25 % de zeros, e 25 % de negativos.
// Resolução:
function maisMenos(arrayNumeros) {
    var quantidade = arrayNumeros.length; //Variável que guarda a quantidade números o array
    var positivos = 0; //Variável que conta os números positivos
    var zeros = 0; //Variável que conta o o número 0
    var negativos = 0; //Variável que conta os números negativos

    for (var contador = 0; contador < quantidade; contador++) { //Enquanto contador for menor que a quantidade repita o loop
        if (arrayNumeros[contador] < 0) { //Se qualquer elemento do array for menor que zero:
            negativos += 1; //Adiciona esse elemento dentro da variável negativos
        } else if (arrayNumeros[contador] > 0) { //Se qualquer elemento do array for maior que zero:
            positivos += 1; //Adiciona esse elemento dentro da variável positivos
        } else { //Se não for nenhum dos casos anteriores,
            zeros += 1; //Adiciona o elemento na variável zeros
        }
    }
    //Com os elementos já alocados corretamente faça as operações:
    positivos = positivos / quantidade;
    zeros = zeros / quantidade;
    negativos = negativos / quantidade;
    //Array que recebe os números já operados
    var total = [positivos, zeros, negativos];
    return total;
}
console.log(maisMenos([1, 2, 0, -1, 0, 0, 1, 2]))
