const a = 10;
const b = 5;

console.log('Soma: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + (a * b));
console.log('Divisão: ' + (a / b));
console.log('Módulo: ' + (a % b));

/*Utilize if/else para fazer um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados*/

const c = 20;
const d = 21;

if (c > d) {
    console.log("'a' é maior que 'b'");
} else {
    console.log("'b' é maior que 'a'");
};

/* Utilize if/else para fazer um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.*/

const e = 8;
const f = 4;
const g = 1;

if (e > f && e > g) {
    console.log('O maior número é: ' + e + ' (e)');
} else if (f > e && f > g) {
    console.log('O maior número é: ' + f + ' (f)');
} else {
    console.log('O maior número é: ' + g + ' (g)');
};

/*Utilize if/else para fazer um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.*/

const number = 4;

if (number > 0) {
    console.log('positivo');
} else if (number < 0) {
    console.log('negativo');
} else {
    console.log('zero');
};
/*Utilize if/else para fazer um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
Um ângulo será considerado inválido se não tiver um valor positivo.*/

const anguloA = 70;
const anguloB = 60;
const anguloC = 50;

let somaDeAngulos = anguloA + anguloB + anguloC;

let todosOsAngulosSaoPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0;

if (todosOsAngulosSaoPositivos) {
    if (somaDeAngulos === 180) {
        console.log(true);
    } else {
        console.log(false);
    };
} else {
    console.log('Erro: ângulo inválido');
}

/* Utilize switch/case para fazer um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.*/

const pecaDeXadrez = 'bispo';

switch (pecaDeXadrez.toLowerCase()) { /*função que faz uma string ficar com todas as letras minúsculas (lower case)*/
    case 'rei':
        console.log('Rei-> Uma casa apenas para qualquer direção.');
        break;
    case 'bispo':
        console.log('Bispo-> Diagonal.');
        break;
    case 'rainha':
        console.log('Rainha-> Diagonal, horizontal e vertical.');
        break;
    case 'cavalo':
        console.log('Cavalo -> "L" pode pular sobre as peças.');
        break;
    case 'torre':
        console.log('Torre -> Horizontal e vertical.');
        break;
    case 'peão':
        console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
        break;
    default:
        console.log('Erro, peça inválida!');
        break;
};

/* Utilize if/else para fazer um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:*/

const grade = 76;

if (grade < 0 || grade > 100) {
    console.log("Erro, nota incorreta!");
} else if (grade >= 90) {
    console.log("A");
} else if (grade >= 80) {
    console.log("B");
} else if (grade >= 70) {
    console.log("C");
} else if (grade >= 60) {
    console.log("D");
} else if (grade >= 50) {
    console.log("E");
} else {
    console.log("F");
}

/* Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
Bonus: use somente um if.*/

const h = 2;
const i = 3;
const l = 5;

let epar = false;

if ((h % 2 === 0 || i % 2 === 0 || l % 2 === 0)) {
  epar = true;
};
console.log(epar);

/*Utilize if/else para escrever um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.

Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.

valorCustoTotal = valorCusto + impostoSobreOCusto;
lucro = valorVenda - valorCustoTotal (lucro de um produto);*/


const custoDoProduto = 1;
const valorDeVenda = 3;

if (custoDoProduto >= 0 && valorDeVenda >= 0) {
  const totalCustoDoProduto = custoDoProduto* 1.2;
  const lucroTotal = (valorDeVenda- totalCustoDoProduto) * 1000;
  console.log(lucroTotal);
} else {
  console.log("Error, os valores não podem ser negativos");
};


/*Utilize if/else para fazer um programa que, dado um salário bruto, calcule o líquido a ser recebido.
Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.

A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

INSS (Instituto Nacional do Seguro Social)

Salário bruto até R$ 1.556,94: alíquota de 8%

Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%

Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%

Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

IR (Imposto de Renda)

Até R$ 1.903,98: isento de imposto de renda

De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto

De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto

De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto

Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:

O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.

Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.

Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:

R$ 2.670,00: salário com INSS já deduzido;
7.5%: alíquota de imposto de renda;
R$ 142,80 parcela a se deduzir do imposto.
Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45

O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

Resultado: R$ 2.612,55.*/


let aliquotaInss;
let aliquotaIr;

const salarioBruto = 2000.00;

if (salarioBruto <= 1556.94) {
    aliquotaInss = salarioBruto* 0.08;
} else if (salarioBruto <= 2594.92) {
    aliquotaInss = salarioBruto* 0.09;
} else if (salarioBruto <= 5189.82) {
    aliquotaInss = salarioBruto * 0.11;
} else {
    aliquotaInss = 570.88;
}

const salarioBase = salarioBruto- aliquotaInss;

if (salarioBase <= 1903.98) {
    aliquotaIr = 0;
} else if (salarioBase <= 2826.65) {
    aliquotaIr = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05) {
    aliquotaIr = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68) {
    aliquotaIr = (salarioBase * 0.225) - 636.13;
} else {
    aliquotaIr = (salarioBase * 0.275) - 869.36;
};

console.log("Salário: " + (salarioBase- aliquotaIr));
