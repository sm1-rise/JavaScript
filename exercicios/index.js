//ATIVIDADE 1

let nomeCompleto;
nomeCompleto = "Samuel Henrique Silva Martins"

console.log("Meu nome completo: " + nomeCompleto);


//ATIVIDADE 2

function multiAeB() {
    let numA = 2
    let numB = 5
    resultado = numA * numB;
    console.log("A multiplicação entre A e B é: " + resultado);
}


//ATIVIDADE 3

function saudacao() {
    console.log("Oi, eu sou o Goku");
}

//ATIVIDADE 4

function multi(numA, numB) {
    resultado = numA * numB;
    console.log("A multiplicação entre A e B é: " + resultado);
}

//ATIVIDADE 5

function dirigir(idade) {
    console.log("Sua idade = " + idade)
    if (idade >= 18) {
        console.log("Pode dirigir");
    }
    else {
        console.log("Não pode dirigir");
    }
}

//ATIVIDADE 6

function loopAte20() {
    for (let i = 0; i < 20; i++) {
        console.log(i);
    }
}

//ATIVIDADE 7

function loopAte20Impar() {
    for (let i = 0; i < 20; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }

    }
}

//ATIVIDADE 8

function tabuada(num) {

    console.log("aqui é pra ser uma tabuada\n")
    for (let i = 1; i <= 10; i++) {
        console.log(i * num)
    }
}

//ATIVIDADE 9
function converterEmHoras(minutos) {
    console.log("Quantidade de minutos = " + minutos)
    let horas = minutos / 60;
    console.log("A conversao entre de minutos para hora = " + horas);
}


multiAeB();

saudacao();

multi(10, 10);

dirigir(20);

loopAte20();

loopAte20Impar();

tabuada(10);

converterEmHoras(120);