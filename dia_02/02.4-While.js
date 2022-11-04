// Ao contrário do for, o while executa a iteração com apenas uma condição. Enquanto essa condição for verdadeira o conteúdo de escopo do while vai sendo cumprido e ao encontrar uma condição falsa o bloco é então encerrado. Por exemplo:


let counter = 0;

while(counter !== 5) {
  counter += 1;
}

function dice () { 
    return Math.ceil(Math.random() * 6);
}
let d1 = dice();
let d2 = dice();
while (d1 === d2) {
    d2 = dice();
}
