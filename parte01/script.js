//AQUI EXIBE UMA MENSAGEM NO CONSOLE
console.log("Direto do arquivo externo");

/*
MENSAGEM
EM
VARIAS
LINHAS
UAU
*/

//alert("CUIDADO!!!");

const PI = 3.14;

console.log(PI);

//LEGADO (NÃO RECOMENDADO)
var nome = "Joãozinho";
console.log(nome);

//MANEIRA CORRETA
let sobrenome = "da Silva";
console.log(sobrenome);

//CONTINHA
let n1 = 2;
let n2 = 3.2;
console.log(n1 + n2);

n2 = "Agora é texto";
console.log(n2);

//BOOLEANO
let bool = true;
console.log(bool);
bool = false;
console.log(bool);

//undefined
let sem_definir;
console.log(sem_definir);

//null
let variavelNula = null;

console.log(sem_definir == variavelNula);
console.log("" == variavelNula);

//string
let string = "Texto";
let string2 = String("tEXTO");

//potenciação x² = 2²
let x = 2;
console.log(x * x);
console.log(x ** 2);

//resto
let a = 3;
let b = 2;

console.log(a / b);
console.log(a % b);

//OPERADORES LÓGICOS
let var01 = true;
let var02 = true;

//AND
console.log(var01 && var02);

//OR
console.log(var01 || var02);

//NOT
console.log(var01);

//COMPARAÇÃO
console.log(bool === "0");

//DIFERENÇA
console.log(10 != 9);

//maior
console.log(10 > 3);

//menor
console.log(10 < 3);

//comparação de strings
console.log("A" > "B");
console.log("B" > "A");
