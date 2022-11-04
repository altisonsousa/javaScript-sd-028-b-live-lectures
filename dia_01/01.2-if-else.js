//   ***  Condições If e Else  ***

const nota = 90;
if (nota >= 80) {
    console.log('Parabéns, você foi aprovado!');
} else if (nota < 80 && nota >= 60) {
    console.log('Você está na nossa lista de espera')
} else if (nota < 60) {
    console.log('Você foi reprovado')
}

// *** Vamos desenvouver um algoritimi em javaScript que verificar se a pessoa ganhou na mega-sena ** //

/* 
* A pessoa marca 6 números, de 1 a 60.
* Uma sequência de 6 números é sorteada.
* Se os números forem correspondesdntes, a pessoa ganha!
*/

// 1 - Jogo da pessoa

let jogoPessoa = [14, 56, 34, 13, 42, 49];
console.log(jogoPessoa);

// 2 - Criando o sorteio
let n1 = Math.floor(Math.random() * 60) + 1;
let n2 = Math.floor(Math.random() * 60) + 1;
let n3 = Math.floor(Math.random() * 60) + 1;
let n4 = Math.floor(Math.random() * 60) + 1;
let n5 = Math.floor(Math.random() * 60) + 1;
let n6 = Math.floor(Math.random() * 60) + 1;

let megaSenaJogo = [n1, n2, n3, n4, n5, n6];

// 3 - Percorrendo o dois arrays

console.log('jogo Pessoa');
for (let index = 0; index < jogoPessoa.length; index++) {
    console.log(jogoPessoa[index]);
}

// Jogo Sorteado

console.log('jogo Sortiado');
for (index = 0; index < megaSenaJogo.length; index += 1) {
    console.log(megaSenaJogo[index])
}

// 4 - Comparando o jogo com o sorteio

let acertos = 0;
for (let iJogo = 0; iJogo < jogoPessoa.length; iJogo += 1) {
    for (iSorteio = 0; iSorteio < megaSenaJogo.length; iSorteio += 1) {
        if (jogoPessoa[iJogo] == megaSenaJogo[iSorteio])
            acertos += 1;
        //acertos ++;
        //acertos + 1;
    }
}

/*
let acertos = 0;
for (let jogoPessoa = 0; jogoPessoa < megaSenaJogo.length; jogoPessoa +=1) {
    console.log(jogoPessoa == megaSenaJogo);
}
*/
// 5 - Imprimindo resultado

console.log('numeros de acertos', acertos);

// *** Ex: mdn web docs. Math.random(), Math.floor() *** //