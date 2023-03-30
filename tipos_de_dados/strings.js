/* é possível declarar uma String por meio
da sua função CONSTRUTORA (dentro de um boxing)  através de ----->  new String("palavra")   */

let exemploStringBox = new String("string encaixotada");
console.log(exemploStringBox);

let contador = 0;
console.time("Performace");

while (contador < 100000){
    "JS";
    contador++;
}
console.timeEnd("Performace");

let contador2 = 0;
console.time('Performace2');

while (contador2<100000){
    new String ("JS2");
    contador2++;
}
console.timeEnd("Performace2");

/* Esta função boxing, chamada de Construtora, PODE atrapalhar a performace,
tornando o tempo de execução mais lento que o da String primitiva */

//Para colocar ASPAS DENTRO DE STRING, basta adicionar BARRA INVERTIDA '\',   \"desta maneira\"   

console.log("Adicionam-se aspas dentro de String \"Desta maneira\", fechando ao final com aspas normalmente.");

//pode-se também colocar ASPAS SIMPLES ANTES DA BARRA INVERTIDA

console.log("Desta maneira\'s, como exemplo: Bob\'s, etc. ");


// o uso de    \n     serve para QUABRAR NA LINHA onde ele se encontra, parecendo uma tabela

let quebraDeLinha = "primeiro \n segundo \n terceiro\nquarto.";
console.log(quebraDeLinha);

let quebraDeLinha2 = "Segunda\nTerça\nQuarta\nQuinta\nSexta.";
console.log(quebraDeLinha2);