// Desafio 01: Professora Furiosa
// Escreva as seguintes funções: 1. acontece, que diz se a aula sucederá de acordo com o array dos estudantes que entraram. 2. aberturas, que utiliza um array
// com os arrays dos estudantes que entraram nos outros dias, e a quantidade mínima de estudantes, e diga quais os dias
// em que as aulas aconteceram e quais não.Por exemplo:
// acontece(alunosDaSegunda, 2)
// true
// aberturas([alunosDaSegunda, alunosDaTerça, alunosDaQuarta], 2)
// [true, false, false]
// Resolução:
var alunosDaSegunda = [10, -5, 3, 0];
var alunosDaTerca = [5, 7, -5, 1];
var alunosDaQuarta = [-10, -2, -5, 4];

function acontece(arr, num) {
    if (arr.length < num) {
        return false;
    }

    let presentes = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 0) {
            presentes += 1;
        }
    }

    return (presentes >= num);
}
console.log(acontece(alunosDaSegunda, 2));

function aberturas(arr, num) {
    let arrAcontece = [];
    for (let i = 0; i < arr.length; i++) {
        arrAcontece.push(acontece(arr[i], num));
    }

    return arrAcontece;
}
console.log(aberturas([alunosDaSegunda, alunosDaTerca, alunosDaQuarta], 3));
