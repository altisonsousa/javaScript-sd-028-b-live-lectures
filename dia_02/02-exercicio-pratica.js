/*
Percorra o array imprimindo todos os valores nele contidos com a função console.log();

Some todos os valores contidos no array e imprima o resultado;

Calcule e imprima a média aritmética dos valores contidos no array;

A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

Utilizando for, descubra qual o maior valor contido no array e imprima-o;

Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

Utilizando for, descubra qual o menor valor contido no array e imprima-o;

Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
*/

// Percorra o array imprimindo todos os valores nele contidos com a função console.log();

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}
 
//Some todos os valores contidos no array e imprima o resultado;
let number = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < number.length; index += 1) {
  result += number[index];
}

console.log(result);
 // Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;
 let num= [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 let resultado = 0;
 
 for (let index = 0; index < num.length; index += 1) {
   result += num[index];
 }
 
 resultado = resultado / num.length;
 
 if (resultado > 20) {
   console.log('valor maior que 20');
 } else {
   console.log('valor menor ou igual a 20');
 }
 //Utilizando for, descubra qual o maior valor contido no array e imprima-o;

 let numberss= [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

 // o valor da variável higherNumber poderia ser qualquer um, desde que fosse menor que o menor número do array numbers. Caso atribuíssemos o valor 101 para a variável, nosso algoritmo estaria errado, pois ele nunca acharia um número maior que 101 no array. Para resolver esse problema, vamos iniciar a variável com o primeiro valor do array. Dessa forma, podemos pular a posição 0 e iniciar com index = 1
 
 let higherNumber = numberss[0];
 
 for (let index = 1; index < numberss.length; index += 1) {
   if (numberss[index] > higherNumber) {
     higherNumber = numberss[index];
   }
 }
 
 console.log(higherNumber);
 //Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
 let numeros1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 let resultad = 0;
 
 for (let index = 0; index < numeros1.length; index += 1) {
   if (numeros1[index] % 2 !== 0) {
     resultad += 1;
   }
 }
 
 if (resultad === 0) {
   console.log('nenhum valor ímpar encontrado');
 } else {
   console.log(resultad);
 }

 //Utilizando for, descubra qual o menor valor contido no array e imprima-o;
 let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

 // o valor da variável smallestNumber poderia ser qualquer um, desde que fosse maior que o maior número do array numbers. Caso atribuíssemos o valor 1 para a variável, nosso algoritmo estaria errado, pois ele nunca acharia um número menor que 1 no array. Para resolver esse problema vamos iniciar a variável com o primeiro valor do array. Dessa forma podemos pular a posição 0 e iniciar com index = 1
 
 let smallestNumber = numbers2[0];
 
 for (let index = 1; index < numbers2.length; index += 1) {
   if (numbers2[index] < smallestNumber) {
     smallestNumber = numbers2[index];
   }
 }
 
 console.log(smallestNumber);  

 //Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado.
 let numbers3 = [];

 for (let index = 1; index <= 25; index += 1) {
   numbers3.push(index);
 }
 
 console.log(numbers3);

 //Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
 let numbers4 = [ 1,  2,  3,  4,  5,  6,  7,  8,
    9, 10, 11, 12, 13, 14, 15, 16,
   17, 18, 19, 20, 21, 22, 23, 24,
   25];
 for (let index = 0; index < numbers4.length; index += 1) {
    console.log(numbers4[index] / 2);
  };
 
 
 
