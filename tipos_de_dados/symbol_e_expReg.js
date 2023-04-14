/*

SYMBOL     tipo de dado primitivo, ÚNICO e imutável, atuando como uma CHAVE ÚNICA EM UM OBJETO

comumente utilizado em operações como o comando for/of, ou em operações da String API como .match,
.split, .replace e outras mais.

*/


/*

EXPRESSÕES REGULARES (são sempre typeOf 'object'): são estruturas formadas por uma sequência de caracteres que 
especificam um padrão formal, servindo para VALIDAR, EXTRAIR ou SUBSTITUIR caracteres
dentro de uma String.

*/

    //.test indica SOMENTE ATRAVÉS DE VALOR BOOLEANO se a expressão foi validada, se reconheceu ou não (true ou false)
console.log(typeof(/john@email.com/));

let regExp = /email@email.com/;
let result = regExp.test("email");
console.log(result);
console.log(regExp);

let exemplo2 = /Bom dia!/;
console.log(typeof(exemplo2));
let testeExemplo2 = exemplo2.test("Bom dia!");
console.log(testeExemplo2);

let exemplo3 = /Boa tarde/;
console.log(typeof(exemplo3));
let testeExemplo3 = exemplo3.test("Boa tarde");
console.log(testeExemplo3);

let exemplo4 = /email@email.com/;
let testeExemplo4 = exemplo4.test("email@email.com");
console.log(testeExemplo4);

//         .exec Retorna DETALHES da expressão em FORMATO DE ARRAY, diferente de test que se limita ao boolean. Caso não reconheça
//a expressão,     .exec   sempre retornará como NULL.
// em              .exec    , sua saída NÃO PRECISA SER IGUAL À EXPRESSÃO REGULAR a ser verificada, 
// mas precisa conter EXATAMENTE o que existe na expressão regular SEM ALTERAÇÃO DOS CARACTERES A SEREM VERIFICADOS,
// podendo haver outros caracteres para além destes.
/* exemplo:    let expressao = /ola bom dia/;
                let saida = expressao.EXEC("ola bom dia tudo bem?"); <----- caso se acrescente algum acento ("olá"), modificará 
                 console.log(expressao);
                 O RESULTADO AQUI SAIRÁ SEM QUEBRAR O CÓDIGO, ou seja, não sairá como NULL. */

let expressaoRegular = /meu amigo lutcha/;
let executar = expressaoRegular.exec("olá, meu amigo lutcha, tudo bem?");
console.log(executar);

// primeiro elemento da expressão, index e input serão exibidos em      .exec, como padrão

let expressaoRegular2 = /noé/;
let executar2 = expressaoRegular2.exec("filme inspirado na história de noé");
console.log(executar2);

let expressaoRegular3 = /ola bom dia/;
let executar3 = expressaoRegular3.exec("ola bom dia tudo bem?");
console.log(executar3);
console.log(executar3.input);
console.log(executar3.index);

let expressaoRegular5 = /mais um exemplo/;
let executar5 = expressaoRegular5.exec("Mais um exemplo"); // null, pois aqui o "m" está modificado (maiúsculo)
console.log(executar5);

let expressaoRegular6 = /os irmaos karamazov/;
let executar6 = expressaoRegular6.exec("O livro os irmaos karamazov é muito bom!"); // vai rodar, pois contém a referência exata.
console.log(executar6);

// METACARACTERES podem ser representados por QUALQUER OUTRO CARACTER

let expressaoRegular4 = /email@email.com/;
let executar4 = expressaoRegular4.exec("email@emailxcom"); // o PONTO "." É UM METACARACTER, por isso pode ser substituído por qualquer outro.
console.log(executar4);

let expressaoRegular7 = /bom.dia.joao/;
let executar7 = expressaoRegular7.exec("bomKdiaFjoao"); //vai rodar, pois O CARACTER SUBSTITUIDO FOI UM METACARACTER, o ponto "."
console.log(executar7);

// ESCAPANDO METACARACTERES      usa-se "\" antes do METACARACTER A SER PRESERVADO, ou seja, não podendo mais ser substituído

let metacaracterPreservado = /email@email\.com.br/;
let preservado = metacaracterPreservado.exec("email@email.comXbr"); //O CARACTER PRESERVADO NÃO PODE SER MODIFICADO, diferente do outro, que se mantém mutável.
console.log(preservado);

let metacaracterPreservado2 = /email@vaiquebrar\.com/;
let preservado2 = metacaracterPreservado2.exec("email@vaiquebrarXcom"); //aqui, seá null
console.log(preservado2);

let metacaracterPreservado3 = /preservado@email.com\.br/;
let preservado3 = metacaracterPreservado3.exec("preservado@emailXcom.br"); //o caracter preservado não sofreu modificação. ESTE IRÁ RODAR
console.log(preservado3);