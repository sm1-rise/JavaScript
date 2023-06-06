// Variáveis

// Use o comando let pra criar a variavel e o = atribuir um valor.
let nome = "Hendy"; // String/Texto, sempre entre aspas
let idade = 27; // Numerico
let brasileiro = true; // Boolean, verdadeiro(true) ou Falso(false)


//Utilize o comando console.log para imprimir no console/terminal
// console.log(nome);
// console.log(idade);

// atribuindo um novo valor a variavel
nome = "Hendy Almeida";

// imprimindo o valor atualizado
// console.log(nome);

// CONDICIONAIS
// if (idade >= 18) { 
//     //SE a condição for verdadeira
//     console.log("Pode dirigir");
// } else { 
//     // SENÃO for verdadeira
//     console.log("Não pode dirigir");
// }

//console.log(signo);

// brasileiro == true OU somente a variavel brasileiro, porque é boolean
// if(brasileiro) {
//     console.log(nome + " é brasileiro(a)");
// } else  {
//     console.log(nome + " é estrangeiro(a)");
// }

// && pra verificar se as duas informações são verdadeiras
// if (idade >= 18 && brasileiro) {

//     console.log("Pode viajar sozinho, somente com o RG.");

// } else if (idade < 18 && brasileiro) {

//     console.log("Pode viajar somente com RG, acompanhado de um adulto");

// } else if (idade >= 18 && !brasileiro) {
// // utilize o comando ! antes da variavel para verificar negação

//     console.log("Pode viajar sozinho, mas precisa de passaporte");

// } else {
//     // se nenhuma condição anterior for verdadeira

//     console.log("Só pode viajar acompanhado de um adulto e com passaporte");

// }


// Loops OU Laços de Repetição


// multiplicação *

// console.log(7*1);
// console.log(7*2);
// console.log(7*3);
// console.log(7*4);
// console.log(7*5);
// console.log(7*6);
// console.log(7*7);
// console.log(7*8);
// console.log(7*9);
// console.log(7*10);


console.log("TABUADA DO 7");
// cria a variavel e atribui o numero inicial; condicional para interromper o loop; 
// iteração ++ pra adicionar mais 1 no contador ou -- pra subtrair 1 do contador
for (let contador = 1; contador <= 10; contador++) {
    console.log("7x"+ contador + "= " + 7 * contador);
}

console.log("acabou!");







