const { gets, print } = require('./funcoes-auxiliares');

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

function fizzBuzz(num) {

    if((num % 3 == 0) && (num % 5 == 0)) {
      return 'FizzBuzz'
    } else if (num % 3 == 0) {
      return 'Fizz'
    } else if (num % 5 == 0) {
      return 'Buzz'
    } else {
      return num
    }

}

let resultado = gets();
print(fizzBuzz(resultado));

//TODO: Caso o valor não seja múltiplo de 3 ou 5, exiba o número, conforme o enunciado.