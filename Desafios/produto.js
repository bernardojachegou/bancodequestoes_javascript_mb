// Desafio 02: Produto
// Necessitamos uma função produto que receba um array de números e retorne o produto: o resultado de multiplicar todos os elementos entre si.
// Por exemplo, produto([1, 4, 7]) deve retornar 28, que é 1 * 4 * 7.
// Resolução:
function produto(arrDeNumeros) {
    var resultado = 1; //Recebe 1 que será o multiplicador da primeira posição do array;
    for (var i = 0; i < arrDeNumeros.length; i++) { //Enquanto iteração for menor que o tamanho do array, faça mais um loop;
        resultado *= arrDeNumeros[i]; //resultado = 1 * primeira posição do array;
    }
    return resultado; //retorna a soma total de todas as posições do array;
}

console.log(produto([2, 4, 7]));
console.log(produto([4, 2, 5]));

