//  ***  Funções  *** //

// - Crie uma função para dar boas vindas
function boasVindas(nome) {
    return 'Boas vindas, ' + nome;
}
let resposta = boasVindas('Altison');
console.log(resposta);

// - Crie uma função para somar dois números
function somaNumeros(nam1, nam2) {
    let resultado = 0;
    resultado = (nam1 + nam2);
    return resultado;
}
console.log(somaNumeros(2, 15));
console.log(somaNumeros(2, 8));
console.log(somaNumeros(7, 70));
console.log(somaNumeros(2, 540));

// como tambem pode ser!
function somaNumeros(nam1, nam2) {
    return nam1 + nam2;
}
console.log(somaNumeros(2, 15));
console.log(somaNumeros(2, 8));
console.log(somaNumeros(7, 70));
console.log(somaNumeros(2, 540));

// - Crie uma função que calcule os números de um jogo de volei 
// Para vitoria, vale 2 pontos
// Para empate vale 1 ponto
function calculeNumeros(vitoria, empate) {
    let resultado = 0;
    resultado = (vitoria * 2) + empate;
    return resultado;
}
console.log(calculeNumeros(2, 3));
console.log(calculeNumeros(10, 3));
console.log(calculeNumeros(2, 5));

// - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
//   Array de teste: [2, 3, 6, 7, 10, 1];.
//   Valor esperado no retorno da função: 4.

function indiceDoMaior(numeros) {
    let indiceMaior = 0;
    for (let indice in numeros) {
      if (numeros[indiceMaior] < numeros[indice]) {
        indiceMaior = indice;
      }
    }
  
    return indiceMaior;
  }
  
  console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]));

// - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
//  Array de teste: [2, 4, 6, 7, 10, 0, -3];.
//  Valor esperado no retorno da função: 6.

function indiceDoMenor(numeros) {
    let indiceMenor = 0;
    for (let indice in numeros) {
      if (numeros[indiceMenor] > numeros[indice]) {
        indiceMenor = indice;
      }
    }
  
    return indiceMenor;
  }
  
  console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3]));

// - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function maiorPalavra(palavras) {
    let maiorPalavra = palavras[0];
    for (let indice in palavras) {
      if (maiorPalavra.length < palavras[indice].length) {
        maiorPalavra = palavras[indice];
      }
    }
  
    return maiorPalavra;
  }
  
  console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); //Fernanda