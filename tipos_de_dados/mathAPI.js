/* MATH é um OBJETO que contém CONSTANTES MATEMÁTICAS e MÉTODOS para
a realização de operações envolvendo números 
São exemplos de constantes disponíveis: Math.E  ,   Math.LN10,   Math.PI  ,  etc*/

/* 

Outras operações importantes:

.abs       converte o sinal para positivo
.ceil      arredonda para cima.
.floor     arredonda para baixo.
.round     arredonda considerando <5 ou >5.
.sign      retorna 1 se for positivo e -1 se for negativo.
.trunc     converte decimal para inteiro  


*/


let dez = Math.abs(10);
let menosVinte = Math.abs(-20);
console.log(dez, menosVinte);

let umPontoUm = Math.ceil(1.1);
let umPontoSeis = Math.ceil (1.6);
let umPontoMenosseis = Math.ceil(-1.6);
let umPontoMenosUm = Math.ceil(-1.1);
console.log(umPontoUm, umPontoSeis, umPontoMenosseis, umPontoMenosUm); 

console.log("FLOOR");

let novePontoNove = Math.floor(9.9);
let menosNovePontoNove = Math.floor(-9.9);

console.log(novePontoNove, menosNovePontoNove);


/* 

Métodos de Operações aritméticas trigonométricas:

Rais cúbica                                                 .cbrt
Retorna o coseno de um ângulo                               .cos
Retorna E elevado a um expoente                             .exp
Retorna raiz quadrada dos quadrados dos números             .hypot
Retorna o logaritmo do número em base natural               .log
Retorna o número elevado a um determinado expoente          .pow
Retorna o seno de um ângulo                                 .sin
Retorna a raiz quadrada do número                           .sqrt
Retorna a tangente de um ângulo                             .tan

*/


let raizCubica = Math.cbrt(8);
console.log(`A raiz cúbica de 8 é ${raizCubica}.`);

let coseno = Math.cos(180);
console.log(`O coseno de 180 é ${coseno}`);

let expoente = Math.exp(1);
console.log(`O expoente de 1 é ${expoente}`);

let raizQuadrada = Math.sqrt(9);
console.log(`A rais quadrada de 9 é ${raizQuadrada}`);

/* Operações que:

Retorna o menor número passado por parâmetro:                 .min
Retorna o maior número passado por parâmetro:                 .max
Retorna um número randômico ente 0 e 1, não incluindo o 1, ALEATÓRIO, NÃO FIXO:    .random

*/

let menorValor = Math.min(5,3,1,2,4,8,7,9,50);
console.log(`O menor valor é ${menorValor}`);

let maiorValor = Math.max(5,3,1,2,4,8,7,9,50);
console.log(`O maior valor é ${maiorValor}`);

let valorRandomico = Math.random();
console.log(valorRandomico);