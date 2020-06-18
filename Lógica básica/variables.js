// Exercício 01:
// Declare e atribuia duas variáveis, uma com o seu nome e outra com o seu sobrenome, e então na variável nomeCompleto mantenha tudo junto.
// Exemplo: "Cesar Michelin"
// Resolução:
var nome = "Michel";
var sobrenome = "Bernardo";
var nomeCompleto = (nome + " " + sobrenome);
console.log(nomeCompleto);

//Exercício 02:
// Declarar e atribuir três variáveis, uma com o seu 'nome', outra com o seu 'sobrenome' e outra com a sua 'idade'. 
// Então, declare uma variável com nome resultado e atribua uma string unindo suas variaveis da seguinte forma: " João Silva terá 30 anos" 
// e utilize o console.log pra mostrar o que acontece. Respeite os espaços!
// Resolução:
var nome = "João";
var sobrenome = "Silva";
var idade = 30;
var resultado = (nome + " " + sobrenome + " terá " + idade + " anos");
console.log(resultado);

//Exercício 03:
// Defina duas variáveis: umNumeroPequeno e umNumeroGrande, e atribua a elas valores numéricos diferentes de acordo com seus nomes. 
// Então defina a variável eMenor e atribua o resultado da comparação se umNumeroPequeno é menor do que umNumeroGrande; e defina a variável eMaior, 
// com o resultado da comparação umNumeroPequeno é maior que umNumeroGrande.
// Resolução:
var umNumeroPequeno = 2;
var umNumeroGrande = 10;
var eMenor = umNumeroPequeno < umNumeroGrande;
var eMaior = umNumeroPequeno > umNumeroGrande;
console.log(eMenor);
console.log(eMaior);
