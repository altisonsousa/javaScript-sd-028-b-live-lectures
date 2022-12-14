//  ***  Exercícios - bônus

//  Uma string é um array de caracteres, então cada elemento do array é uma letra.
//  O valor de cada numeral romano é:
//  Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?

//  Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.

const numerosRomanos = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,
};
function romanoParaDecimal(numero) {
    numero = numero.toLowerCase();
    const len = numero.length;
    let soma = numerosRomanos[numero[len - 1]];
    let atual = numerosRomanos[numero[len - 1]];

    for (let i = 2; i <= len; i += 1) {
        const prox = numerosRomanos[numero[len - i]];

        if (atual <= prox) {
            soma += prox;
        } else {
            soma -= prox;
        }

        atual = prox;
    }

    return soma;
}

console.log(romanoParaDecimal('MMXVIII'));
console.log(romanoParaDecimal('VI'));
console.log(romanoParaDecimal('IV'));

  //  Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro.
 //  Através de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array, que deverá ser retornado ao final pela função.

 const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
  ];
  
  const result = {};
  
  for (let index = 0; index < basket.length; index += 1) {
    const fruit = basket[index];
    if (!result[fruit]) result[fruit] = 0;
    result[fruit] += 1;
  }
  
  const summaries = [];
  
  for (fruit in result) {
    let message = `${result[fruit]} ${fruit}`;
    if (result[fruit] > 1) message += 's';
    summaries.push(message);
  }
  
  console.log(`Sua cesta possui: ${summaries.join(', ')}.`);