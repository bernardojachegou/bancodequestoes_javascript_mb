// Desafio 05: Escada
// Queremos representar uma escada com altura variável, utilizando um array de strings.
// Por exemplo, uma escada com altura 3, representaremos com o seguinte array:
// var escada3 = [
//     "  #",
//     " ##",
//     "###"
// ]
// Escreva uma função escada que utilize uma altura (um número) e retorne um array que represente a escada correspondente. Não esqueça que o espaço " " faz parte da resposta.
// Resolução:
function escada(tamanhoDaEscada) {
    var totalDegraus = []; //Array vazio que receberá o tamanho total da escada;

    for (let i = 1; i <= tamanhoDaEscada; i++) { //Enquanto iteração for menor que o tamanhoDaEscada, faça mais um loop;
        var degraus = " ".repeat(tamanhoDaEscada - i) + "#".repeat(i); //A Variável degraus recebe a quantidade de espaços e a quantidade de # de acordo com o loop;
        totalDegraus.push(degraus); //Adiciona o que foi recebido pela variável graus no tamanho total da escada;
    }
    return totalDegraus; //Retorna um array com o tamanho total da escada;
};

console.log(escada(2));

