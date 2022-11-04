//  ***  For/in e for/of  ***  //

// marcas de carros presentes em um Array 
let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
    console.log(cars[index]);
}

//  Iteração nas chaves de um objeto:
let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
};

for (let index in car) {
    console.log(index, car[index]);
}

//  ***  for/of  ***  //

let food = ['hamburguer', 'bife', 'acarajé'];
for (let position in food) {
    console.log(position);
  };
  
  //  Se percorrermos um objeto, também teremos o mesmo resultado. O for/in irá percorrer a propriedade declarada, e não o seu valor em si.

  //  Já o for/of percorre os elementos dos objetos iteráveis através dos seus respectivos valores, e não dos índices como o for/in. Vejamos o exemplo:

  let food2 = ['hamburguer', 'bife', 'acarajé'];
for (let value of food) {
  console.log(value);
};

//  Para fixar
//  Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };
  
  for (let name in names) {
    console.log("Olá " + names[name])
  }

  //  Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

  let car2 = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };
  
  for (let key in car2) {
    console.log(key + ': ' + car2[key]);
  }
