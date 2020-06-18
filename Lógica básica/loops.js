// Exercício 01:
// Faça uma função chamada imprimirAzul4 que mostre 4 vezes a palavra Azul.
// Resolução:
function imprimirAzul4() {
    for (var i = 0; i < 4; i++) {
        console.log("Azul");
    };
};
imprimirAzul4();

// Exercício 02:
// Execute uma função chamada imprimir5vezes5 que mostra no console 5 vezes o número 5.
// Resolução:
function imprimir5vezes5() {
    for (var i = 0; i < 5; i++) {
        console.log(5);
    };
};
imprimir5vezes5();

// Exercício 03:
// Escreva uma função passoAPasso, que imprime 5 vezes o conteúdo de i.
// Resolução:
function passoAPasso() {
    for (var i = 0; i <= 4; i++) {
        console.log(i);
    };
};
passoAPasso();

// Exercício 04:
// Execute uma função chamada passandoPelosPares() que mostra pelo console aqui eu tenho o valor de x para cada valor PAR que percorra i de 0 até e inclusive 6.
// Resolução:
function passandoPelosPares() {
    for (var i = 0; i <= 6; i++) {
        if (i % 2 == 0) {
            console.log("aqui eu tenho o valor de " + i);
        }
    };
};
passandoPelosPares();

// Exercício 05:
// Escreva uma função somar5MoedasDe25Centavos, que adiciona o valor de 5 moedas de 0,25 centavos e retorna o resultado.
// Resolução:
var totalMoedas = 0;
function somar5MoedasDe25Centavos() {
    for (var i = 0; i < 5; i++) {
        totalMoedas = totalMoedas + 0.25;
    };
    return totalMoedas;
};
console.log(somar5MoedasDe25Centavos());

// Exercício 06:
// Escreva uma função somarMoedasDe25(quantidadeDeMoedas), que toma como parâmetro um valor numérico e retorna a soma das moedas de 25 centavos.
// Resolução:
function somarMoedasDe25(quantidadeDeMoedas) {
    var totalMoedas = 0;
    for (var i = 0; i < quantidadeDeMoedas; i++) {
        totalMoedas = totalMoedas + 0.25;
    };
    return totalMoedas;
};
console.log(somarMoedasDe25(1));
console.log(somarMoedasDe25(10));

// Exercício 07:
// Defina a função somaDosPares(x) que retorna a soma total de todos os números que são pares, ou seja, divisíveis por 2 obtendo resto 0. 
// Desta forma: 0 + 2 + 4 + 6 + 8 + 10 + ..... X
// Resolução:
function somaDosPares(x) {
    var somaTotal = 0;
    for (var i = 0; i <= x; i++) {
        if (i % 2 == 0) {
            somaTotal = somaTotal + i;
        }
    };
    return somaTotal;
};
console.log(somaDosPares(20));

// Exercício 08:
// Defina a função chamada somatoria, que receba como parâmetro um número e retorne a soma dos números antecessores a ele.
// Resolução:
function somatoria(numeroX) {
    var somaTudo = 0;
    for (var i = 0; i < numeroX; i++) {
        somaTudo = somaTudo + i;
    }
    return somaTudo;
}
console.log(somatoria(4));
console.log(somatoria(5));

// Exercício 09:
// Crie uma função chamada caloriasDeTrote(), que recebe por parâmetro o número de voltas representado por um valor numérico e retorne a quantidade de calorias que será consumida.
// Resolução:
function caloriasDeTrote(numeroVoltas) {
    var totalCalorias = 0;
    var calorias = 5;
    for (var i = 0; i <= numeroVoltas; i++) {
        totalCalorias = totalCalorias + (calorias * i);
    };
    return totalCalorias;
};
console.log(caloriasDeTrote(2));
