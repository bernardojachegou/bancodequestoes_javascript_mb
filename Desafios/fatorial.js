// Desafio 03: Fatorial
// Escreva uma função fatorial, que calcule o fatorial de um número.
// Resolução:
function fatorial(numero) {
    if (numero < 0) { //Se for menor que zero:
        return "O valor não pode ser negativo!"
    } else if (numero == 0 || numero == 1) { //Se for zero ou 1;
        return 1; //O Fatorial é igual 1;
    } else {
        resultado = 1; // Variável de multiplicação inicial;
        for (var i = numero; i > 1; i--) { //Enquanto o número for maior que 1, faça numero - 1 e repita o loop;
            resultado *= i; //resultado é igual a o número vezes o valor já alocado na variável;
        }
    }
    return resultado; //retorne o total depois da iterações;
}
console.log(fatorial(5));
console.log(fatorial(0));
console.log(fatorial(-2));
