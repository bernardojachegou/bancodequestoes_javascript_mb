<h1 align="center">Banco de questões em JS</h1>
<h2 align="center">
    <img alt="preview application" src="https://sujeitoprogramador.com/wp-content/uploads/2019/08/jsjsjs.png" width="400px"/>
</h2>

<h2 align="center">Introdução</h2>

<p align="justify">Esse repositório foi criado com o objetivo de compartilhar questões de lógica de programação com JS. As questões dispobilizadas aqui serão resolvidas e as resoluções se econtrarão dentro do repositório. A ideia é fazer com que você pratique tentando resolver as questões sem antes consultar as resoluções. Bons estudos! </p>

## Sumário
> * [Variáveis](#variáveis)
> * [Funções](#funções)
> * [Condicionais](#condicionais)
> * [Laços de repetição](#laços)
> * [Arrays](#arrays)
> * [Resoluções](#resoluções)

<h2 align="center">Questões</h2>

### Variáveis

1 - Declare e atribuia duas variáveis, uma com o seu nome e outra com o seu sobrenome, e então na variável nomeCompleto mantenha tudo junto. Exemplo: "Cesar Michelin"

2 - Declare e atribua três variáveis, uma com o seu 'nome', outra com o seu 'sobrenome' e outra com a sua 'idade'. Então, declare uma variável com nome resultado e atribua uma string unindo suas variaveis da seguinte forma: " João Silva terá 30 anos" e utilize o console.log pra mostrar o que acontece. Respeite os espaços!

3 - Defina duas variáveis: umNumeroPequeno e umNumeroGrande, e atribua a elas valores numéricos diferentes de acordo com seus nomes. Então defina a variável eMenor e atribua o resultado da comparação se umNumeroPequeno é menor do que umNumeroGrande; e defina a variável eMaior, com o resultado da comparação umNumeroPequeno é maior que umNumeroGrande.

### Funções

1 - Escreva a função multiplicar que receba dois parâmetros, multiplique-os e retorne o resultado da multiplicação.

2 - Declare uma função chamada triploDaSoma() que recebe dois parâmetros. Então você tem que adicionar ambos e retornar três vezes o valor do resultado da soma dos dois parâmetros . Será preciso declarar a função triplo, que recebe um parâmetro e retorna o valor dele multiplicado por três.

3 - Vamos criar uma função perimetro que nos diga o perímetro de um círculo quando damos a ele o raio como parâmetro e também a função area que nos dá a área de um círculo quando recebe o raio como parâmetro. Lembre-se de usar o valor de 3.14 no lugar do π . perimetro = π * raio * 2; area = π * raio * raio; 

4 - Escreva a função escreverCartao, que recebe como parâmetros um título, um nome e um sobrenome e retorna uma única string como resultado.

5 - Escreva uma função gerarProbabilidade(), que não recebe parâmetros e retorna a porcentagem de probabilidade de chuva, calculada aleatoriamente usando Math.random ().

### Condicionais

1 - Declara a variável diaDeSemana que receba uma string "domingo". Depois implemente uma condicional usando o if que compare se diaDeSemana é igual a "domingo", se for verdadeiro imprima uma string "Hoje é dia de futebol!!!".

2 - Defina a função hojeSeJoga, que receba por parâmetro uma string que informe o día da semana. Esta função deve retornar "Hoje é dia de futebol!!!" se parâmetro for "domingo", caso contrário deve retornar "Hoje não é dia de futebol :(".

3 - Defina a função eMaior, que recebe dois números por parâmetro, e retorna o maior entre eles.

4 - Escreva a função eNumeroDaSorte que, recebendo um número, diz se é um número da sorte (true).  Podemos dizer que é um número da sorte se o número: 1-é positivo. 2-é um múltiplo de 2 ou 3. 3-não é 15. Lembre-se de que o número deve obedecer às três condições mencionadas. Seu desafio adicional será: NÃO use o if.
        
5 - Defina a função possoIrAoBanco que, receba dois parâmetros, o primeiro é diaDaSemana (string) e o segundo horaAtual(numero), a função deve retornar true, apenas se o banco estiver aberto.

6 - Defina a função filosofoHipster que recebe como parâmetro: a profissão de uma pessoa (string), nacionalidade (string) e o número de quilômetros que ele anda por dia (número). Com esses parâmetros avalie se essa pessoa é ou não (true / false), um filósofo Hipster.  Tenha em mente que um filósofo Hipster é um Músico, nascido no Brasil e que gosta de andar mais de 2 quilômetros por dia.
        
7 - Escreva a função podeSeAposentar que recebe por parâmetro a idade, o sexo e os anos de contribuição previdenciária que uma pessoa tem.Tenha em mente que a idade mínima para se aposentar para mulheres é 60 anos, enquanto que para homens é 65. Em ambos os casos, você deve ter pelo menos 30 anos de contribuição.

8 - Defina a função podeSubir, recebendo 3 parâmetros: alturaPessoa (numero), vemComCompania (booleano), temProblemaCardiaco (booleano), retorne true ou false conforme o caso. Levar em conta as condições necessárias mencionadas acima.
        
9 - Defina a função medalhaSegundoOPosto que recebe o posto como parâmetro e retorna um texto de acordo com o parâmetro. Dica: nessa função você pode usar vários if.

### Laços

1 - Faça uma função chamada imprimirAzul4 que mostre 4 vezes a palavra Azul.

2 - Execute uma função chamada imprimir5vezes5 que mostra no console 5 vezes o número 5.

3 - Escreva uma função passoAPasso, que imprime 5 vezes o conteúdo de i.

4 - Execute uma função chamada passandoPelosPares() que mostra pelo console aqui eu tenho o valor de x para cada valor PAR que percorra i de 0 até e inclusive 6.

5 - Escreva uma função somar5MoedasDe25Centavos, que adiciona o valor de 5 moedas de 0,25 centavos e retorna o resultado.

6 - Escreva uma função somarMoedasDe25(quantidadeDeMoedas), que toma como parâmetro um valor numérico e retorna a soma das moedas de 25 centavos.

7 - Defina a função somaDosPares(x) que retorna a soma total de todos os números que são pares, ou seja, divisíveis por 2 obtendo resto 0. 

8 - Defina a função chamada somatoria, que receba como parâmetro um número e retorne a soma dos números antecessores a ele.

9 - Crie uma função chamada caloriasDeTrote(), que recebe por parâmetro o número de voltas representado por um valor numérico e retorne a quantidade de calorias que será consumida.

### Arrays

1 - Crie uma variável do tipo array chamada pertences que contém as strings "espada","escudo","crossbow" e imprima o array utilizando o console.log. Utilize o método push para adicionar a string "cross", após adicionar a string imprima o array novamente com o console.log.

2 - Declarar uma função chamada “mover”, que recebe dois arrays, remove o último elemento do primeiro e adiciona-o ao segundo.

3 - Escreva a função contem(array, numero) que nos diz se um array contém um determinado elemento.

4 - Escreva a função “medalhaDeAcordoComPosto(numero)”, que recebe um número como parâmetro. Usando apenas o máximo de um “if” apenas.

5 - Escreva a função quantidadeDeMesesComPerda

6 - Escreva a função saldoDeMesesComLucro. Você pode usar a mesma estrutura do exercício dos exercícios anteriores.

7 - Queremos escrever uma função naipeDeTruco, que dado um naipe, devolva uma lista de strings, uma por cada carta desse naipe seguindo as cartas do truco. Lembre-se que as cartas de truco incluem todas as cartas numeradas de 1 a 12, com exceção das cartas 8 e 9.

### Resoluções

1 - Clique na pasta: Lógica.

2 - Encontre a questão de acordo com o tópico.
