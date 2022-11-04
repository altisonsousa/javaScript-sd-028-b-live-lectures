//Ordene o array numbers em ordem crescente e imprima seus valores;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);  

//Ordene o array numbers em ordem decrescente e imprima seus valores;
let numbers1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers1.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers1[index] > numbers1[secondIndex]) {
      let position = numbers1[index];
      numbers1[index] = numbers1[secondIndex];
      numbers1[secondIndex] = position;
    }
  }
}

console.log(numbers1);

//Agora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:
let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoArray = [];

for (let index = 0; index < numbers2.length; index += 1) {
  if (index + 1 < numbers2.length) {
  novoArray.push(numbers2[index] * numbers2[index + 1]);
  } else {
    novoArray.push(numbers2[index] * 2);
  }
}

console.log(novoArray);






// 1 - Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é: X
let soma = 0;
for (let i = 1; i <= 50; i += 1) {
    soma += i;
}
console.log("Exercicio 01")
console.log(soma);
console.log("")


// 2 - Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.
console.log("Exercicio 02")
let contador = 0;
for (let i=2; i <= 150; i += 1) {
    if (i % 3 === 0) {
        contador += 1;
    }
}
if (contador === 50) {
    console.log("mensagem super-secreta, não leia. Segredo!")
}
console.log("")


// 3 - Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 


// 4 - Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
// Bônus: Crie a condição utilizando operador ternário.
// 5 - Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.