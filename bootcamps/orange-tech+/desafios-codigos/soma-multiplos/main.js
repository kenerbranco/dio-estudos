const { gets, print } = require('./funcoes-auxiliares');

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 

var a = parseInt(gets());
var N = parseInt(gets());
var soma = 0;
 
// Retorne o valor da soma de todos múltiplos de "A" até o seu limite "N".

for(let i = a; i <= N; i = i + a) {
  soma = soma + i;
}

print(soma);