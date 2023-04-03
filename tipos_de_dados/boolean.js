/* 

Assim como Number e String, BOOLEAN é primitivo, imutável.
Retorna TRUE ou FALSE
Obs.: Sempre que se cria TRUE e FALSE, cria-se um processo de boxing entorno dele.

!!    A exclamação nega, e a exclamação dupla NEGA A NEGAÇÃO do valor: por exemplo,
!-10 === 10; todavia, !!-10 === -10, pois neste caso ele positivou e depois negativou novamente.
A obrigatoriedade da exclamação dupla serve para FORÇAR O INTERPRETADOR A CONSIDERAR OS TIPOS DE DADOS COMO BOOLEANOS.

Tipos que sempre são valorados como FALSE, sempre contendo '!!':
COERSÃO DE TIPO, quando um tipo de dado é utilizado EM UM CONTEXTO onde ele é CONVERTIDO.

-------> SOFREM COERÇÃO DE TIPO <--------

1                !!0
2                !!NaN
3                !!""
4                !!false
5                !!undefined
6                !!null

Fora esses casos citados, os demais são TRUE.

*/

/*

OPERADORES BOOLEANOS
ATENÇÃO!!!

'==' e '!=' podem gerar uma COERÇÃO DE TIPO; portanto, é recomendável utilizar '===' e '!==' para fins comparativos/de igualdade,
                                                        pois estes TAMBÉM VERIFICAM OS TIPOS DE DADOS (String, number, null, etc.).

*/

/* 

OPERADORES LÓGICOS

OU      ||        o primeiro valor sendo TRUE, aborta o segundo e retorna o primeiro; caso contrário, avalia-se o segundo.
E       &&        são avaliados NECESSARIAMENTE os dois valores.

Em caso de FALSE em ||, será considerado o próximo valor, para verificação de TRUE.

Aqui, eles sofrem COERÇÃO DE TIPO, retornando o próprio operando, ou seja: O RETORNO É O PRÓPRIO OPERANDO.
assim, se não 
*/


function valorDeMax (max){
    max = max || 1000;   //por max ser vazio (caso max seja vazio, como passado no segundo caso da saída), é 'undefined', assim, lê-se o próximo valor, no caso, 1000.
    return Math.floor(Math.random() * max);


}
console.log(valorDeMax(1000));
console.log(valorDeMax());


/*

OPERADOR TERNÁRIO (muito bom para atribuições pequenas)

(expressão) ? true : false           Aqui, a expressão será avaliada, primeira e, caso não seja true, a segunda, ou seja
                                     o ':' tem função semelhante ao '||'.

*/

let comparacao1 = "bom dia";
console.log(comparacao1 ? "correto" : "incorreto" ); //String é TRUE

let comparacao2 = "";
console.log(comparacao2 ? "correto" : 'incorreto'); //vazio é FALSE, portanto, a segunda opção, que é false no op. ternário, foi executada.(coerção de tipo forçada)

let comparacao3 = NaN;
console.log(comparacao3 ? "correto" : "incorreto"); //NaN é FALSE (coerção de tipo forçada)

let comparacao4 = 9;
console.log(comparacao4 ? "correto" : "incorreto"); //este valor é TRUE