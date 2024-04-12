let texto = String(
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto laborum ducimus vel enim dolor id, debitis expedita rerum, voluptatem eum accusamus! Eveniet incidunt est praesentium, molestias excepturi ipsa accusamus dolorem!"
);

console.log("TAMANHO: " + texto.length);
console.log("MAIÚSCULO: " + texto.toUpperCase());
console.log("minúsculo: " + texto.toLowerCase());
console.log("Caractere na posição: " + texto.charAt(2));

//FUNÇÕES DE NUMEROS
let num = 10;

console.log("BINÁRIO" = num.toString());

//Biblioteca MATEMÁTICA
console.log("PI: " + Math.PI);
console.log("PI redondo: " + Math.round(Math.PI));
console.log("PI com 4 depois da vírgula: " + Math.PI.toFixed(4));

//DECISÃO
let idade = 19;

if (idade >= 18) {
    console.log("Você pode apostar no jogo do tigrinho");
} else {
    console.log("Você NÃO pode apostar no jpogo do tigrinho");
}

let textinho = "";

if (textinho == "") {
    console.log("Tem algo definido");
} else if (textinho == "") {
    console.log("Espaço em branco");
} else {
    console.log("Tejm muita coisa escrita lá. Conteudo: " + textinho);
}

let opcao = 1;

switch(opcao) {
    case 0:
        console.log("0");
        break;
    case 1:
        console.log("1");
        break;
    default
        console.log("Diferente");
        break;
}

let idade2 = 17;

let msg = idade2 >= 18 ? "Maior de 18" : "Menor de 18";

console.log(msg);

//LAÇOS
for(let i=0;i<10;i++) {
    console.log(i+1);
}

let x;
while(true) {
    console.log(x)
    x++;

    if (x >= 10) break;
}