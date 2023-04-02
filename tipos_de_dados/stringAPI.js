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

let comparacaoDeTamanho = "a".localeCompare("a");
console.log(comparacaoDeTamanho);

let comparacaoDeTamanho1 = "História".localeCompare("Letras");
console.log(comparacaoDeTamanho1);

let comparacaoDeTamanho2 = "Letras".localeCompare("História");
console.log(comparacaoDeTamanho2);

let comparacaoDeTamanho3 = "oi".localeCompare("au");
console.log(comparacaoDeTamanho3);

let comparacaoDeTamanho4 = "oi".localeCompare("oi");
console.log(comparacaoDeTamanho4);


/*

.match          Retorna PARTES DA STRING baseado na RegExp passada por parâmetro.
------> aqui, a parte da String a ser reconhecida se dá dentro de BARRAS + g >>>> / x /g <<<<<'

.search         Retorna O PRIMEIRO CARACTERE na String com base na RegExp passada por parâmetro.
.replace        Retorna uma nova String resultante da SUBSTITUIÇÃO DA STRING ou RegExp 
                passada no primeiro parâmetro pelo segundo parâmetro. 

*/

let partesDaString = "new York new";
console.log(partesDaString.match(/w/g));

let partesDaString2 = "Joao Pessoa Paraiba";
console.log(partesDaString2.match(/a/g));

let partesDaString3 = "C++";
console.log(partesDaString3.match(/\+/g)); // a segunda barra serve para que não haja CONCATENAÇÃO com o '+'.

let buscarPorCaractere = "café quente";
console.log(buscarPorCaractere.search('a'));

let buscarPorCaractere2 = "café quente";
console.log(buscarPorCaractere2.search('t'));

let substituicaoNaString = 'substituicao de string ou parte dela.';
console.log(substituicaoNaString.replace('string', 'palavra'));

let substituicaoNaString2 = "substituicao de parte da dela.";
console.log(substituicaoNaString2.replace(/a/g, '4'));


/* 

.slice      Retorna os caracteres INDICADOS POR POSICIONAMENTO
.split      Retorna em forma de ARRAY resultando em DIVISÃO DA STRING ORIGINAL 
            de acordo com o critério passado por parâmetro.
.substring  Retorna a partir do posicionamento indicado no parâmetro; todavia, 
            mais funcional que o .split

*/

let caracteresPorPosicionamento = "localização de caracter por posicionamento";
console.log(caracteresPorPosicionamento.slice(0, 5));

let caracteresPorPosicionamento2 = "localização de caracter por posicionamento";
console.log(caracteresPorPosicionamento2.slice(-14));

let caracteresPorPosicionamento3 = "localização de caracter por posicionamento";
console.log(caracteresPorPosicionamento3.slice(15, 24));

let caracteresPorPosicionamento4 = "localização de caracter por posicionamento";
console.log(caracteresPorPosicionamento4.slice(11, 22));

let arrayDivididoPorParametroDado = "Divisão de String por parâmetro dado";
console.log(arrayDivididoPorParametroDado.split('a'));

let arrayDivididoPorParametroDado2 = "joao maria jose";
console.log(arrayDivididoPorParametroDado2.split('a'));

let arrayDivididoPorParametroDado3 = "joao ; maria ; jose";
console.log(arrayDivididoPorParametroDado3.split(';'));

let exemploDeFuncionalidadeDoSubstring = "a ordem será corrigida.";
console.log(exemploDeFuncionalidadeDoSubstring.substring (23,0));

let exemploDeFuncionalidadeDoSubstring2 = "um dois.";
console.log(exemploDeFuncionalidadeDoSubstring2.substring(3));

/*

.concat         Retorna uma nova String CONCATENANDO A JÁ EXISTENTE À PASSADA POR PARÂMETRO  
.padStart       Acrescenta Strings com caracteres NO INÍCIO passados por parâmetro (quantos caracteres possuir, "string"). 
.padEnd         Acrescenta Strings com caracteres NO final passados por parâmetro.
.repeat         Repete um caractere   .repeat(quantidade a ser repetida) .
.trim           Elimina espaços em branco no NO INÍCIO E NO FIM.
.trimStart       Elimina espaços em branco NO INÍCIO.
.trimEnd      Elimina espaços em branco NO FINAL.

*/

let concatenarString = "Uni";
console.log(concatenarString.concat('córnio.'));

let concatenarString2 = "junção de ";
console.log(concatenarString2.concat("Strings."));

let concatenacaoNoInicio = "café"
console.log(concatenacaoNoInicio.padStart(8,"bolo"));

let concatenacaoNoInicio2 = "um";
console.log(concatenacaoNoInicio2.padStart(6,"dois"));

let concatenacaoNoFinal = "C";
console.log(concatenacaoNoFinal.padEnd(4,'+'));

let concatenacaoNoFinal2 = "João ";
console.log(concatenacaoNoFinal2.padEnd(10, "José")); //mais espaço definido que a quantidade de caracter existente, houve caracter repetido ("J").

let concatenacaoNoFinal3 = "uni";
console.log(concatenacaoNoFinal3.padEnd(8,"versal")); //menos caracteres, não couberam todos no espaço definido (8).

let repeticaoDeString = "um dois";
console.log(repeticaoDeString.repeat(2));

let eliminarEspacosNasExtremidades = " João Maria José   ";
console.log(eliminarEspacosNasExtremidades.trim());

let eliminarEspacosNaEsquerda = "       João Maria";
console.log(eliminarEspacosNaEsquerda.trimStart());

let eliminarEspacosNaDireita = "João e Maria         ";
console.log(eliminarEspacosNaDireita.trimEnd()+ "termina aqui");




