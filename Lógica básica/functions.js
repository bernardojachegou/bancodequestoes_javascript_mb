// Exercício 01:
// Escreva a função multiplicar que receba dois parâmetros, multiplique-os e retorne o resultado da multiplicação.
// Resolução:
function multiplicar(numero1, numero2) {
    return numero1 * numero2;
};
console.log(multiplicar(5, 10));

// Exercício 02:
// Agora pedimos que você declare uma função chamada triploDaSoma() que recebe dois parâmetros. Então você tem que adicionar ambos e retornar 
// três vezes o valor do resultado da soma dos dois parâmetros . Será preciso declarar a função triplo, 
// que recebe um parâmetro e retorna o valor dele multiplicado por três.
// Resolução:
function triplo(num1) {
    return num1 * 3;
};
function triploDaSoma(numero1, numero2) {
    var soma = numero1 + numero2;
    return triplo(soma);
};
console.log(triploDaSoma(3, 2));
console.log(triploDaSoma(4, 5));

// Exercício 03:
// Vamos criar uma função perimetro que nos diga o perímetro de um círculo quando damos a ele o raio como parâmetro.
// Também a função area que nos dá a área de um círculo quando recebe o raio como parâmetro. 
// Lembre-se de usar o valor de 3.14 no lugar do π . perimetro = π * raio * 2; area = π * raio * raio; 
// Resolução:
function perimetro(raio) {
    return 3.14 * raio * 2;
};
console.log(perimetro(4));
function area(raio) {
    return 3.14 * raio * raio;
};
console.log(area(4));

// Exercício 04:
// Escreva a função escreverCartao, que recebe como parâmetros um título, um nome e um sobrenome e retorna uma única string como resultado.
// Resolução:
function escreverCartao(titulo, nome, sobrenome) {
    var informacoes = titulo + " " + nome + " " + sobrenome;
    return informacoes;
};

console.log(escreverCartao('Dra.', 'Ana', 'Pérez'));
console.log(escreverCartao('Dr.', 'Julio', 'Gelman'));

// Exercício 05s:
// Escreva uma função gerarProbabilidade(), que não recebe parâmetros e retorna a porcentagem de probabilidade de chuva, calculada aleatoriamente usando Math.random ().
// Resolução:
function gerarProbabilidade() {
    return Math.random() * 100;
};
console.log(gerarProbabilidade(0.5));
