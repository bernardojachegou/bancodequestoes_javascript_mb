// Desafio 06: Árvore Utópica
// As árvores utópicas  crescem de uma forma particular, em dois ciclos:
// cada primavera dobram seu tamanho
// cada verão crescem um metro
// Se Laura planta uma árvore utópica com um metro, no final do outono, qual seria sua altura depois de N ciclos?
// Alguns exemplos:
// si N = 0, sua altura será 1 metro(não cresceu nada)
// si N = 1, sua altura será de 2 metros(dobrou a altura na primavera)
// si N = 2, sua altura será de 3 metros(cresceu um metro mais no verão)
// si N = 3, sua altura será de 6 metros(dobrou a altura na primavera seguinte)
// Escreva a função alturaArvoreUtopica, que utilize uma quantidade de ciclos de crescimento, e retorne a altura resultante da árvore de Laura.
// Resolução:
function alturaArvoreUtopica(nCiclos) {
    let tamanhoArvore = 1; //Tamanho incial da árvore / 1 metro;
    for (let i = 0; i < nCiclos; i++) //Enquanto iteração for menor que o nCiclos, repita o loop;
        if (i & 1) //Se iteração for 1, faça:
            tamanhoArvore += 1; //tamanhoArvore = tamanhoArvore + 1;
        else //Se não:
            tamanhoArvore *= 2; //tamanhoArvore = tamanhoArvore * 2;
    return tamanhoArvore; //Retorne o tamanho depois das condições;
}
console.log(alturaArvoreUtopica(3));
