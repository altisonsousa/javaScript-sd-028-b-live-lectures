// Obtenha o valor “Serviços” do array menu:
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

//Procure o índice do valor “Portfólio” do array menu:
let carros = ['fusca', 'opala', 'maverick'];
let indexOfmaverick = carros.indexOf('maverick');

console.log(indexOfmaverick);

//Adicione o valor “Contato” no final do array menu:
let link = ['Home', 'Serviços', 'Portfólio', 'Links'];

console.log(link);
link.push('contato');

// Declare uma variavel com o numero 7, que multiplice até 9
let numero = 7;
for (index = 1; index <= 9; index++) {
    console.log(numero * index);
}

// for e array
let listaDeNomes = ['Altison', 'Celia', 'Ryan', 'Luka', 'Eric'];
for (let indice = 0; indice < listaDeNomes.length; indice++) {
    let mensagem = 'Boas vindas, ' + listaDeNomes[indice] + '!';
    console.log(mensagem);
}

// Lista com marcas de carros:
let cars = ["Saab", "Volvo", "BMW"];

for (let index = 0; index < cars.length; index += 1) {
    console.log(cars[index]);
}


// Para fixar
//Utilize o for para imprimir os elementos da lista groceryList com o console.log():
let listaDeCompras = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (let index = 0; index < listaDeCompras.length; index++) {
    const elementos = listaDeCompras[index];
    console.log(elementos);
}

//  For. O for/of nos permite criar loops em objetos iteráveis como strings, arrays, 
let numeros = [1, 2, 3, 4, 5];
for (let numero of numeros) {
    console.log(numero);
}

// resultado: 
//1
//2
//3
//4
//5


//  O laço for/of permite iterar os valores das propriedades, nos retornando os números dentro do array numeros.
let palavra = 'Hello';
for (let carta of palavra) {
    console.log(carta);
}
// resultado:
// "H"
// "e"
// "l"
// "l"
// "o"

// Utilize o for para imprimir os elementos da lista groceryList com o console.log():
let  listaDeCompra = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < listaDeCompra.length; index++) {
  const element = listaDeCompra[index];
  console.log(element);
}
 //Utilize o for/of para imprimir os elementos da lista names com o console.log():
 let nomes = ['João', 'Maria', 'Antônio', 'Margarida'];

for(let index of nomes) {
  console.log(index);
}
