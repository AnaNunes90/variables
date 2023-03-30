/* O JS possui apenas um tipo de número: Number.
Suporta os sistemas de numeração DECIMAL, HEXADECIMAL, BINÁRIO e OCTAL */
const numero = new Number (10); // ao usar new Number, o número não está solto, está ENCAICHOTADO por um objeto.
console.log(numero);

/* 
MÉTODOS UTILIZADOS em Numbers:
.toExponential
.to.Fixed
.toPrecision 
*/

// .toExponential
const numeroExponencial = 123.4;
console.log(numeroExponencial.toExponential(10));

// .toFixed
const numeroFixed = 30;
console.log(numeroFixed.toFixed(2));

// .toPrecision (indica o número TOTAL de algarismo deste número)
const numeroPrecision = 12;
console.log(numeroPrecision.toPrecision(3));

// OBJETOS são valores que repesentam uma REFERÊNCIA NA MEMÓRIA que PODE SER ALTERADA (conteúdo)

//Operadores de INCREMENTO (++) e de DECREMENTO (--)
/* resultado = 10
++ resultado
resultado = 20 */

/*Operadores binários (conversão PARA NÚMEROS BINÁRIOS, não booleans)
|     OR
&     AND
~     NOT (inverte os bits)
^     SHOR (chamado de "ou exclusivo")
<<    mudança de bits para direita
>>    mudança de bits para a esquerda
>>>   mudança de bits COM MUDANÇA DE SINAL*/

// CONVERSÃO de string para number
// parseInt( "valor inteiro")
// parseFloat (" valor decimal")


