const { gets, print } = require('./funcoes-auxiliares');

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

function comparNumbers(a, b) {
  if(a === b) {
    return 'Sao iguais!';
  } else {
    return 'Nao sao iguais!';
  }
}

let A = gets();
let B = gets();

//TODO: Imprima se os valores numéricos passados são iguais ou não.

print(comparNumbers(A, B));