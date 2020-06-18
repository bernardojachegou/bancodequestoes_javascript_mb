// Exercício 01:
// Crie uma variável do tipo array chamada pertences que contém as strings "espada","escudo","crossbow" e imprima o array utilizando o console.log.
// Utilize o método push para adicionar a string "cross", após adicionar a string imprima o array novamente com o console.log.
// Resolução:
var pertences = ["espada", "escudo", "crossbow"];
console.log(pertences);
pertences.push("cross");
console.log(pertences);

// Exercício 02:
// Declarar uma função chamada “mover”, que recebe dois arrays, remove o último elemento do primeiro e adiciona-o ao segundo.
// Resolução:
var umArray = [1, 2, 3];
var outroArray = [4, 5];
function mover(x, y) {
    y.push(x.pop());
};
mover(umArray, outroArray);
console.log(umArray);
console.log(outroArray);

// Exercício 03:
// Escreva a função contem(array, numero) que nos diz se um array contém um determinado elemento.
// Resolução:
function contem(array, numero) {
    for (var i = 0; i <= array.length; i++) {
        if (array.indexOf(numero) != -1) {
            return true;
        } else {
            return false;
        };
    };
};
console.log(contem(umArray, 2));

// Exercício 04:
// Escreva a função “medalhaDeAcordoComPosto(numero)”, que recebe um número como parâmetro. Usando apenas o máximo de um “if” apenas.
// Resolução:
var medalhas = ["ouro", "prata", "bronze"];

function medalhaDeAcordoComPosto(numero) {
    if (numero > medalhas.length) {
        return "nada"
    } else {
        return medalhas[numero - 1];
    };
};
console.log(medalhaDeAcordoComPosto(1));

// Exercício:
// Complete a função quantidadeDeMesesComLucro.
// function quantidadeDeMesesComLucro(umPeriodo) {
//     var quantidade = ????;
//     for (let mes = 0; mes < umPeriodo.length; mes++) {
//         ????
//     }
//     return quantidade;
// }
// Resolução:
var trimestre = [50, 200, -10];
function quantidadeDeMesesComLucro(umPeriodo) {
    let quantidade = 0;
    for (let mes = 0; mes < umPeriodo.length; mes++) {
        if (umPeriodo[mes] > 0) {
            quantidade = quantidade + 1;
        };
    };
    return quantidade;
};
console.log(quantidadeDeMesesComLucro(trimestre));

// Exercício 05:
// Escreva a função quantidadeDeMesesComPerda
// Resolução:
function quantidadeDeMesesComPerda(umPeriodo) {
    let quantidade = 0;
    for (let mes = 0; mes < umPeriodo.length; mes++) {
        if (umPeriodo[mes] < 0) {
            quantidade = quantidade + 1;
        };
    };
    return quantidade;
};
console.log(quantidadeDeMesesComPerda(trimestre));

// Exercício 06:
// Escreva a função saldoDeMesesComLucro. Você pode usar a mesma estrutura do exercício dos exercícios anteriores.
// Resolução:
function saldoDeMesesComLucro(umPeriodo) {
    let saldo = [];
    for (let mes = 0; mes < umPeriodo.length; mes++) {
        if (umPeriodo[mes] > 0) {
            saldo.push(umPeriodo[mes]);
        };
    };
    return saldo;
};
console.log(saldoDeMesesComLucro(trimestre));

// Exercício 07:
// Queremos escrever uma função naipeDeTruco, que dado um naipe, devolva uma lista de strings, uma por cada carta desse naipe seguindo as cartas do truco.
// Lembre-se que as cartas de truco incluem todas as cartas numeradas de 1 a 12, com exceção das cartas 8 e 9.
// Resolução:
function naipeDeTruco(naipe) {
    return ["1", "2", "3", "4", "5", "6", "7", "10", "11", "12"].map(function (tipo) {
        return [tipo, naipe].join(' de ');
    });
}
console.log(naipeDeTruco('espadas'));
console.log(naipeDeTruco('copas'));

