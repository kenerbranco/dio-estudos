const { gets, print } = require('./funcoes-auxiliares');

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 

function criaArrStr(str) {

    let arr = [];

    for (let i=0; i<str.length; i++) {
        arr[i] =str[i];
    }

    return arr;

}

function criaStrInv(arr) {

    return arr.reduce((accumulator, currentValue) => accumulator+currentValue);

}

function checaPalindromo(str) {
    
    const arrStr = criaArrStr(str); // Cria um array com cada caracteres da string
    const arrInv = arrStr.reverse(); // Inverte ordem dos caracteres
    const strInv = criaStrInv(arrInv); // Concatenação de todas letras numa string

    if (str === strInv) {
        return "TRUE";
    } else {
        return "FALSE";
    }
}

let resultado = gets();
print(checaPalindromo(resultado));

//TODO:Retorne TRUE ou FALSE, caso a "palavra" seja ou não um Palíndromo.