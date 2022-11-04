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