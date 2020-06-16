// Desafio 01: Professora Furiosa
// Escreva as seguintes funções: 
// 1. acontece, que diz se a aula sucederá de acordo com o array dos estudantes que entraram. 
// 2. aberturas, que utiliza um array
// com os arrays dos estudantes que entraram nos outros dias, e a quantidade mínima de estudantes, e diga quais os dias
// em que as aulas aconteceram e quais não.Por exemplo:
// acontece(alunosDaSegunda, 2)
// true
// aberturas([alunosDaSegunda, alunosDaTerça, alunosDaQuarta], 2)
// [true, false, false]
// Minha Resolução:
var alunosDaSegunda = [10, -5, 3, 0];
var alunosDaTerca = [5, 7, -5, 1];
var alunosDaQuarta = [-10, -2, -5, 4];

function acontece(estudantes, quantidadeParaAula) {
    let pontuais = 0; //variável que recebe os alunos que chegaram na hora correta

    for (let i = 0; i < estudantes.length; i++) { //Enquanto iteração for menor que o array de estudantes, faça mais um loop
        if (estudantes[i] >= 0) { //Se o elemento dentro do array for maior ou igual a zero:
            pontuais += 1; //Adiciona o elemento na variáevl pontuais
        }
    }

    return (pontuais >= quantidadeParaAula); //Retorne verdadeiro se pontuais for maior ou igual que a quantidade de alunos necessários para aula
}
console.log(acontece(alunosDaSegunda, 2));


function aberturas(diasDaSemana, quantidadeParaAula) {
    let relatorio = []; ///variável irá retornar os valores booleanos
    for (let i = 0; i < diasDaSemana.length; i++) { //Enquanto iteração for menor que o array, faça mais um loop
        relatorio.push(acontece(diasDaSemana[i], quantidadeParaAula)); //Relatório recebe um booleano resultado da função acontece
    }

    return relatorio; //Retorna o array depois da iterações (Com o resultado final)
}
console.log(aberturas([alunosDaSegunda, alunosDaTerca, alunosDaQuarta], 2));
