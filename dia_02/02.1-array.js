let listaDePerguntas = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(listaDePerguntas.length);
// 3

let procurarPelaPrimeiraTarefa = listaDePerguntas[0];
console.log(procurarPelaPrimeiraTarefa);
// Tomar café
 
/* É possível acessar os arrays pelo seu índice. O fato curioso é que a primeira posição do array é representada pelo número 0. Desse modo, para acessarmos o último elemento da estrutura, devemos pegar a quantidade de seus elementos utilizando o .length e subtrair 1 */

let procurarUltimaTarefa = listaDePerguntas[listaDePerguntas.length - 1];
console.log(procurarUltimaTarefa);
// Brincar com o cachorro


/* Adicionar e remover itens de um Array? Veja e pratique com o exemplo a seguir */

let perguntas = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

perguntas.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
console.log(perguntas);
/* [
    'Tomar café', 
    'Reunião', 
    'Brincar com o cachorro', 
    'Fazer exercícios da Trybe'
] */

let pergunta = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

pergunta.unshift('Fazer exercícios da Trybe');  
console.log(pergunta);
/* [
    'Fazer exercícios da Trybe'
    'Tomar café',
    'Reunião',
    'Brincar com o cachorro',
] */
//adicionar no início, podemos usar o .unshift(). Teste em seu console e veja o resultado.


let esportes = ['futebol', 'volei', 'basquete'];
esportes.pop();
console.log(esportes);
/*[ 
    'futebol', 
    'volei' 
] */
//O método .pop() nos permite remover o último item do array.

let esporte = ['futebol', 'volei', 'basquete'];
esporte.shift();
console.log(esporte);
/*[ 
    'volei', 
    'basquete' 
]*/

let carros = ['fusca', 'corcel', 'brasilia'];
let indexOfCarros = carros.indexOf('corcel');
console.log(indexOfCarros);
// 0
