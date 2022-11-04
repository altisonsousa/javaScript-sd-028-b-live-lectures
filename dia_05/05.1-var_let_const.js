//  Altere o valor das propriedades do objeto, para que respeite as características da variável do tipo const;

const pessoa = {
  nome: 'Henri',
  idade: 20
}

pessoa.nome = 'Luna'
pessoa.idade = 19

console.log('Nome:', pessoa.nome)
console.log('Idade:', pessoa.idade)


  //Modifique a estrutura das funções a seguir para que elas sejam arrow functions;

//ransforme a função numeroAleatorio em uma arrow function;

const numeroAleatorio = () => Math.random()

console.log(numeroAleatorio());

//  Transforme a função hello em uma arrow function;

function ola(nome) {
  return `Olá, ${nome}!`
}
let nome = 'Celia';
console.log(ola(nome));

//  Transforme a função nomeCompleto em uma arrow function;

function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`
}
let nome2 = 'Celia';
let sobrenome = 'Guedes';
console.log(nomeCompleto(nome, sobrenome));

//  Altere a expressão if/else utilizando ternary operator;

let speed = 90;
const speedCar = (speed) => {
  if (speed >= 120) {
    return `Você ultrapassou o limite de velocidade`;
  } else {
    return `Você está na velocidade permitida`;
  }
};
console.log(speedCar(speed));

//  odifique a variável para que respeite o escopo onde está sendo declarada. Lembre-se: para que a variável respeite o escopo, ela não deve ser acessível fora do escopo em que esteja sendo declarada.

function imprimeIdade() {
  for (let idade = 30; idade <= 40; idade += 1) {
  console.log('Idade dentro do for:', idade)
  }
  
}

imprimeIdade()

//  Altere a expressão if/else utilizando ternary operator

let velocidade = 90;

const velocidadeCar = (speed) => (
  speed >= 120 ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`
);

console.log(velocidadeCar(speed));  

/* Função 1: Escreva uma função que substitua a letra ‘x’ em uma frase.

O nome da função deverá ser substituaX;

A função deverá receber um nome por parâmetro;

Declare dentro da função uma variável do tipo const, com o nome frase, atribuindo o valor 'Tryber x aqui!';

A função deverá retornar uma nova frase em que o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.*/

/* Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.

O nome da função deverá ser minhasSkills;

A função deverá receber o retorno da Função 1 - substituaX por parâmetro;

Declare dentro da função uma variável com o nome skills, do tipo const;

A variável skills deverá ser um array contendo três strings com tecnologias que você já aprendeu.
Crie uma varável do tipo let e concatene o valor retornado da Função 1 - substituaX (utilize template literals), a frase 'Minhas três principais habilidades são:' e o valor da variável skills. */

/* Função 1: Escreva uma função que substitua a letra ‘x’ em uma frase.

O nome da função deverá ser substituaX;

A função deverá receber um nome por parâmetro;

Declare dentro da função uma variável do tipo const, com o nome frase, atribuindo o valor 'Tryber x aqui!';

A função deverá retornar uma nova frase em que o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro. */

const substituaX = (nome) => {
  const frase = 'Tryber x aqui!';
  const fraseArray = frase.split(' ');
  for (let index = 0; index < fraseArray.length; index += 1) {
    if (fraseArray[index] === 'x') {
      fraseArray[index] = nome;
    }
  }  
  return fraseArray.join(' ');
};

console.log(substituaX('Altison'));

 /* Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.

O nome da função deverá ser minhasSkills;

A função deverá receber o retorno da Função 1 - substituaX por parâmetro;

Declare dentro da função uma variável com o nome skills, do tipo const;

A variável skills deverá ser um array contendo três strings com tecnologias que você já aprendeu.
Crie uma varável do tipo let e concatene o valor retornado da Função 1 - substituaX (utilize template literals), a frase 'Minhas três principais habilidades são:' e o valor da variável skills. */
 

const minhasSkills = (func) => {
  const skills = ['JavaScript', 'HTML', 'CSS'];
  let resultado = `
  ${func}

  Minhas três principais habilidades são:`;
  for (let index = 0; index < skills.length; index += 1) {
    resultado = `${resultado}
    - ${skills[index]}`; 
  }
  return resultado;
};
console.log(minhasSkills(substituaX('Altison')));

