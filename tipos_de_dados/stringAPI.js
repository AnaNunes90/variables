/* Operações Strings API

.length        Retorna o tamanho da String.
.indexOf       Retorna a primeira posição encontrada do caractere do parâmetro.
.lastIndexOf   Retorna a última posição encontrada do caractere do parâmetro passado.
.toUpperCase   Converte String para maiúscula.
.toLowerCase   Converte String para minúscula.

*/

let quantidadeDeCaracteres = "quantidade".length;
console.log(quantidadeDeCaracteres);

let localizadorDeIndex = "Letra \"Y\" esta.".indexOf("Y");
console.log(localizadorDeIndex);

let maiuscula = "ana".toUpperCase();
console.log(maiuscula);

let minuscula = "ANA".toLowerCase();
console.log(minuscula);