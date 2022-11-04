//  ***  Algoritmos  ***  //

let novasPessoasUsuarias = ['pedro', 'Maria', 'Arthur', 'Fernando'];

let sistemas = ['Folha de pagamento', 'RH', 'Trenamento', 'Slack', 'Zoom'];

// Objetivi: Criar um software para adicionar novas pessoas usuarias.
// - Ele deve ter um controle de acesso
// - Se a pessoa usuaria tiver acesso, o sistema deve imprimir a mensagem 'Acesso permitido!', caso contrario, exiba 'Acesso negado!'
// - como podemos exuibir a mensagem solicitada?
// - como eu faço para verificar uma condição?

let login = 'usuarioTrybe';
let senha = 'altison';
let temAcesso = false;

if (login === 'usuarioTrybe' && senha === 'altison') {
    temAcesso = true;
    console.log('Acesso permitido');
} else {
    console.log('Acesso ngado');
}

// O sitema deve criar senhas iniciais aleatorias para novas pessoas usuarias no padrão 'nome' + '_' + numero aleatorio
// Obs. A operação só deve ser relizada se a pessoa tiver acesso a ela!
// Divida os problemas em parte menores:
// - Como verificar se tenho acesso?
// - Como percorrer cada pessoa para gerar uma senha?
// - Como gerar numeros aleatorios? 

if (temAcesso === true) {

}
for (index = 0; index < novasPessoasUsuarias.length; index += 1) {
    // array [index]
    console.log('Novas pessoas usuarias', '', novasPessoasUsuarias[index] + '_' + Math.floor(Math.random() * 1234));
    // Math.floor(Math.random() * 1234)
}

// - Incerir as novas pessoas usúarias nos sistemas da empresa (criar uma lista do sistema e o nome de navas pessoas cadastradas);
// - Sistema de folhas de pagamento
// - Pessoas usuarias
//  Obs: A operação só deve ser vrealizada se a pessoa usúaria tiver acesso a ela!
//       Munição para o exercicio: 

//  Passo a passo:
     //  Como verificar se tenho acesso?
if (temAcesso === true) {
    //  Como passar pelo array de sistemas?
    for (let indexSistemas = 0; indexSistemas < sistemas.length; indexSistemas += 1) {
        console.log('Sistemas:', sistemas[indexSistemas]);
    //  Como passar pelo array de novas pessoas?
for (indexNovasPessoas = 0; indexNovasPessoas < novasPessoasUsuarias.length; indexNovasPessoas += 1) {
        console.log(novasPessoasUsuarias[indexNovasPessoas]);
}
}
}


//   ***  Operadores lógicos 'Operador AND ou &&'  ***

const comida = 'pão na chapa';
const bebida = 'cafézinho';

if (bebida === 'cafézinho' && comida === 'pão na chapa') {
    console.log('Muito obrigado pela refeição :)');
} else {
    console.log('Acho que houve um engano com meu pedido');
}

const lanche = 'pão na chapa';
const suco = 'laranja';

if (suco === 'cafézinho' && lanche === 'pão na chapa') {
    console.log('Muito obrigado pela refeição :)');
} else {
    console.log('Acho que houve um engano com meu pedido');
}


const condicao1 = true;
const condicao2 = true;
console.log(condicao1 && condicao2);
  // Precisamos manter em mente que só teremos true se as duas expressões em volta dele forem true também. 



const horario = 6;
let mensagem = '';

if (horario >= 22) {
    mensagem = 'Não deveríamos comer nada, é hora de dormir';
} else if (horario >= 18 && horario < 22) {
    mensagem = 'Rango da noite, vamos jantar: D';
} else if (horario >= 14 && horario < 18) {
    mensagem = 'Vamos fazer um bolo pro café da tarde?';
} else if (horario >= 11 && horario < 14) {
    mensagem = 'Hora do almoço!!!';
} else if (horario < 11) {
    mensagem = 'Hmmm, cheiro de café recém-passado';
} console.log(mensagem);

//   ***  Operador OR ou ||  ***

const diaDaCemana = "quarta-feira";
if (diaDaCemana === "segunda-feira" || diaDaCemana === "terça-feira" || diaDaCemana === "quarta-feira" || diaDaCemana === "quinta-feira" || diaDaCemana === "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
} else {
    console.log("FINALMENTE, descanso merecido UwU");
}

//   ***  Operador NOT ou ! ***

console.log((2 + 2) === 4);
console.log(!(2 + 2) === 4);
const esguichar = "melhor pokemon inicial";

console.log(!esguichar); // false
console.log(!42); // false

console.log(!0); // true
//O número 0 tem o valor "falsy" no javascript.Logo, seu oposto é true.
console.log(!null); // true
console.log(!undefined); // true