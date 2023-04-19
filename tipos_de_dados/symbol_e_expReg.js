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


/* 

INICIANDO e FINALIZANDO OBRIGATORIAMENTE por um determinado caractere, em   .exec

Iniciar em derterminado caractere    -->     ^     <--
Finalizar em determinado caractere   -->     $     <--

*/

let inicializando = /joao@joao.com/;
let inicial1 = inicializando.exec("Email: joao@joao.com");
console.log(inicial1);

let inicializando2 = /^jose@jose.com/;
let inicial2 = inicializando2.exec("Email: jose@jose.com"); //Vai quebrar, pois o '^' FORÇOU COMEÇAR desta forma
console.log(inicial2);

let inicializando3 = /^Tenha/;
let inicial3 = inicializando3.exec("Tenha um bom dia"); //Não vai quebrar, pois está começando com o indicado pela expressão regular
console.log(inicial3);

let finalizando = /.com$/;
let final = finalizando.exec("exemplo@exemplo.com"); // vai rodar, por que TERMINA COM O INDICADO na expressão regular
console.log(final);

let finalizando2 = /muito obrigada$/;
let final2 = finalizando2.exec("Formulário preenchido, muito obrigada!"); // vai quebrar, por NÃO TERMINOU DA FORMA EXATA como consta na expressão regular
console.log(final2);

// GRUPOS DE CARACTERES A SEREM SELECIONADOS OU EXCLUÍDOS
/*

[abc]   aceita os caracteres DENTRO DESTE GRUPO
[^abc]  NÃO ACEITA os caracteres presentes neste grupo
[0-9]   aceita caracteres de 0 a 9
[^0-9]  não aceita caracteres de 0 a 9

Aqui, o circunflexo    ^     É A NEGAÇÃO daqueles caracteres presentes nos colchetes.
a QUANTIDADE DE CARACTERES é sempre levada em conta.


*/

let caracterSelecionado = /[a-z][a-c][a-z]/;
let selecao = caracterSelecionado.exec("bom"); // vai quebrar, pos o segundo caracter NÃO ESTÁ INCLUSO NO PARÂMETRO OBRIGATÓRIO.
console.log(selecao);

let caracterSelecionado2 = /[a-z][a-z][a-z][a-z]/;
let selecao2 = caracterSelecionado2.exec("boom"); //vai rodar qualquer String compatível com a quantidade de caractér passada no parâmetro da expr. regular
console.log(selecao2);

// a QUANTIDADE EXATA DE CARACTER É NECESSÁRIA para rodar ou quebrar a expressão regular passada

let caracterSelecionado3 = /[0-9][0-9][0-9][0-9]/;
let selecao3 = caracterSelecionado3.exec("O ano 1990 é de nascimento"); //vai rodar, pois os caracteres preenchem o parâmetro passado (tamanho e números)
console.log(selecao3);

let caracterSelecionado4 = /[0-9][0-9][0-9][0-9]$/;
let selecao4 = caracterSelecionado4.exec("O ano é de 1990 no Ocidente."); //não vai rodar, pois o parâmetro está forçando terminar com o que foi passado.
console.log(selecao4);

let caracterSelecionado5 = /^[0-9][0-9][0-9][0-9]/;
let selecao5 = caracterSelecionado5.exec("199 é o ano de nascimento.");// não vai rodar, pois inicia como o parâmetro está forçando, mas
                                                                        // a QUANTIDADE DE CARACTERES PASSADA NO PARÂMETRO não é equivalente.
console.log(selecao5);

/*

QUANTIFICADORES podem ser aplicados a caracteres, grupos, metacaracteres ou conjuntos (quantificadores são mais elegantes, quer colocar em colchetes cada um dos caracteres, a não seja que seja necessidade)

{n}      quantidade ESPECÍFICA de caracteres
{n,}     quantidade MÍNIMA de caracteres
{n,m}    quantidade MÍNIMA E MÁXIMA A TER de caracteres presentes



*/

//EXEMPLO: um email com quantidade específica de caracteres caracteres

let emailQuantificador = /[a-z]{7}@email.com/;
let quantificador = emailQuantificador.exec("meuemail@email.com"); // vai rodar, pois são exatamente 7 caracteres colocados
console.log(quantificador);

let emailQuantificador2 = /[a-z]{10}@email.com/;
let quantificador2 = emailQuantificador2.exec("meuemail@email.com"); // o mesmo código não roda, pois não corresponde ao número de caracteres passados.
console.log(quantificador2);

// EXEMPLO: um email com um mínimo e um máximo de caracteres

let emailQuantificador3 = /[a-z]{4,10}@email.com/;
let quantificador3 = emailQuantificador3.exec("vairodar@email.com"); // vai rodar, pois obedece ao parâmetro: letras e quantidades mínima e máximas de caracteres.
console.log(quantificador3);

let emailQuantificador4 = /[a-z]{5,}@email.com/;
let quantificador4 = emailQuantificador4.exec("jose@email.com"); // não vai rodar, pois não obedece à quantidade mínima passada.
console.log(quantificador4);

/*
aqui NÃO USAMOS AS CHAVES {}

?    zero ou um caracter
*    zero ou mais caracteres
+    um ou mais caracteres que devem constar 

*/

//// EXEMPLO: um email com quantidade livre de caracteres

let emailQuantificador5 = /[a-z]+@email.com/; // um ou mais caracteres, de a à z, são liberados
let quantificador5 = emailQuantificador5.exec("kjlbhglkjsbegbaebfgçabwfbvakw@email.com");
console.log(quantificador5);

/*

continuação METACARACTERES

Aqui estão algumas REPRESENTAÇÕES DE METACARACTERES, 
--->SEMPRE ACOMPANHADOS DE QUANTIFICADORES:<---

\w     representa o conjunto (COMPLETO) [a-zA-Z0-9_] ----> underline equivale à espaço  

\W     representa o conjunto [^a-zA-Z0-9_]

\d     o conjunto [0-9]

\D     o conjunto [^0-9]

\s     espaço em branco

\S     espaço que NÃO ESTÁ EM BRANCO

\n     QUEBRA DE LINHA

\t     representa um tab

*/


// email com metacaracter que abrange números e letras maiusculas e minusculas

let contmeta = /^\w+@email.com/; //deve iniciar necessariamente com este parâmetro, dentro do conjunto \w
let saidaContMeta = contmeta.exec("meta@email.com"); 
console.log(saidaContMeta);

let contmeta2 = /\w+@\w+.com/; // contém livre nome e livre nomeclatura antes do @ acrecido de .com
let saidaContMeta2 = contmeta2.exec("emailCadastrado1987@email.com");
console.log(saidaContMeta2);

let contmeta3 = /^\w{4,10}@\w{5,10}.\w{2,3}$/;
let saidaContMeta3 = contmeta3.exec("jose@email.com");
console.log(saidaContMeta3);

let contmeta4 = /^\d{10}@email.edu.br/;
let saidaContMeta4 = contmeta4.exec("2023152630@email.edu.br");
console.log(saidaContMeta4);

/*

GRUPOS DE CAPTURA

( )   determina um GRUPO DE CAPTURA para realizar a EXTRAÇÃO DE VALORES de determinada String
      aqui, ficará fácil LOCALIZAR ONDE ESTÁ DETERMINADA INFORMAÇÃO
*/

// EXEMPLO: busque o id e email do usuário separadamente, por POSIÇÃO

let capturaCaracter = /^(\w+)@(\w{5,8})(.\w{2,3})(.\w{2})$/;
let saidaCaptura = capturaCaracter.exec("captura@email.com.br");
console.log(saidaCaptura);
console.log(`Seu id é ${saidaCaptura[1]}, e seu email é ${saidaCaptura[2]}`);

let capturaCaracter2 = /^(\d{4,10})@(\w+).com/; // nome do usuário apenas com números \d
let saidaCaptura2 = capturaCaracter2.exec("2023938@email.com.br");
console.log(saidaCaptura2);

