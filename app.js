// Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!".
// Caso contrário, mostre "Boa semana!".
/*
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
//

/**
 *  Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
 *
*/

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
//


// Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!".
// Caso contrário, mostre "Tente novamente para ganhar.".

// Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

// Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
