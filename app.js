/**
 *  Pergunte ao usuário qual é o dia da semana.
 *  Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!".
 *  Caso contrário, mostre "Boa semana!".
*/

/**
    console.log('>>> Início do programa.');

    let dia = prompt('Informe qual o dia semana: ');
    console.log('>>> Informado qual o dia da semana pelo usuário.');

    if (dia === 'sabado' || dia === 'Sabado' || dia === 'sábado' || dia === 'Sábado' || dia === 'Domingo' || dia === 'domingo' ) {
        alert('Bom fim de semana!');
    } else {
        alert('Boa semana!');
    }
    console.log('>>> Fim do programa.');
*/
//------------------------------------------------------------------------

/**
 *  Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
 *


console.log('>>> Inicio do programa.')
console.log('>>> ')
console.log('>>> Aguardando entrada do usuário.');
console.log('>>> ')
let numero = Number(prompt('Informe um valor: '));

console.log('>>> Verificando valor informado...');
console.log('>>> ');

if (numero < 0) {
    alert(`${numero} é uma valor NEGATIVO`);
    console.log('>>> Usuário informou um valor NEGATIVO.');
    console.log('>>> ');
} else {
    alert(`${numero} é um valor POSITIVO.`);
    console.log('>>> Usuário informou um valor POSITIVO.');
    console.log('>>> ');
}

console.log('>>> Fim do programa.')
console.log('>>> ');

 */
//------------------------------------------------------------------------

/**
// Crie um sistema de pontuação para um jogo.
*  Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!".
*  Caso contrário, mostre "Tente novamente para ganhar.".
*/

/**
console.log('>>> Inicio do programa.');
console.log('>>> ');
console.log('>>> Aguardando entrada do usuário.');
console.log('>>> ');
let pontos = Number(prompt('Informe a sua pontuação: '));

console.log('>>> Processando pontuação.');
console.log('>>> ');
if (pontos >= 100) {
    alert(`Parabéns, você venceu!`);
    console.log('>>> Usuário vencedor. ')
} else {
    alert(`Tente novamente para ganhar!`);
    console.log('>>> Usuário não vencedor. ')
}
console.log('>>> Fim do programa.');
console.log('>>> ');
*/

//------------------------------------------------------------------------

/**
 * Crie uma mensagem que informa o usuário sobre o saldo da conta,
 * usando uma template string para incluir o valor do saldo.
 *
  */

/**

console.log('>>> Inicio do programa.');
console.log('>>> ');
console.log('>>> Aguardando entrada do usuário.');
console.log('>>> ');

let nome = prompt('Informe seu nome: ');

console.log('>>> Usuário informou o Nome.');
console.log('>>> ');

let saldo = 1000;

alert(`${nome}, o saldo atual é de R$ ${saldo} reais.`);

console.log('>>> Saldo do usuário informado.');
console.log('>>> ');
console.log('>>> Fim do programa.');
console.log('>>> ');

*/

//------------------------------------------------------------------------

/**
 * Peça ao usuário para inserir seu nome usando prompt.
 * Em seguida, mostre um alerta de boas-vindas usando esse nome.
*/

/**
console.log('>>> Inicio do programa.');
console.log('>>> ');
console.log('>>> Aguardando entrada do usuário.');
console.log('>>> ');

let nome = prompt('Informe o seu nome: ')

console.log('>>> Usuário informou nome.');
console.log('>>> ');

alert(`Nossas boas-vindas à você ${nome}.`);

console.log('>>> Mensagem apresentada ao usuário.');
console.log('>>> ');

console.log('>>> Fim do programa.');
console.log('>>> ');
*/

//------------------------------------------------------------------------