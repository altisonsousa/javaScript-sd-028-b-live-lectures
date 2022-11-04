// ***  FOR/OF  ***  //

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