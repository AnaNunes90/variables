/* Operações Strings API   -    criação, manipulação e verificação de texto em JS através de um conjunto de métodos e propriedades.

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

let localizadorDeIndex2 = "Buscar a letra W no index";
console.log(localizadorDeIndex2.indexOf("W")); 

let maiuscula = "ana".toUpperCase();
console.log(maiuscula);

let minuscula = "ANA".toLowerCase();
console.log(minuscula);

let maiuscula2 = 'palavra';
console.log(maiuscula2.toUpperCase());


/*

.charAt           Retorna o CARACTERE PELA SUA POSIÇÃO passada por parâmetro.
.charCXodeEt      Retorna o código com base na posição NA TABELA UNICODE, através do esquema de codificação UTF-8 passada por parâmetro
.fromCharCode     Retorna um caractere com base no código UTF-8 passado por parâmetro.

*/

let posicaoCaractere = "Da Vinci".charAt(3);
console.log(posicaoCaractere);

/* verificar de uma String contém, começa ou termina com determinado grupo de caracteres

.includes       Retorna TRUE se a String contém a String passada por parâmetro.
.startsWith     Retorna TRUE se a String INICIA COM A STRING PASSADA POR PARÂMETRO.
.endsWith       Retorna TRUE se a String TERMINA com a String passada por parâmetro.

*/

let inclui = "Tenha um bom dia!".includes("bom");
console.log(inclui);

let comecaComAstring = "Tenha um bom dia!".startsWith('Tenha');
console.log(comecaComAstring);

let terminaComAstring = "Tenha um bom dia!".endsWith("bom");
console.log(terminaComAstring);

/* 

.localeCompare     COMPARAÇÃO DE LOCAL entre duas Strings (por ordem alfabética)
Assim sendo:    a < b === -1  ,      b < c === -1 ,     d > c === 1 , a = a === 0  , etc. 
Obs.: Seguindo pela língua portuguesa, pode dar errado, uma vez que as ACENTUAÇÕES INFLUEM NA POSIÇÃO das letras.
*/

let comparacaoDeTamanho = "à".localeCompare("a");
console.log(comparacaoDeTamanho);

let comparacaoDeTamanho1 = "História".localeCompare("Letras");
console.log(comparacaoDeTamanho1);

let comparacaoDeTamanho2 = "Letras".localeCompare("História");
console.log(comparacaoDeTamanho2);

let comparacaoDeTamanho3 = "oi".localeCompare("au");
console.log(comparacaoDeTamanho3);

let comparacaoDeTamanho4 = "oi".localeCompare("oi");
console.log(comparacaoDeTamanho4);