const { gets, print } = require('./funcoes-auxiliares');

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 

function criaArrNumeros(n) {

    let arr = [n];
    let num = n;

    for (let i=1; i<n; i++) {

        num = num - 1;
        arr[i] = num;

    }

    return arr;

}

function criaArrQuadrados(n) {
    
    let arrQuadrados = [];
    const arrNumeros = criaArrNumeros(n);
    
    arrNumeros.forEach((element) => {

        const numRaiz = Math.sqrt(element);

        if (numRaiz === parseInt(numRaiz)) {

            arrQuadrados.push(numRaiz*numRaiz);
        }
    });
    
    return arrQuadrados;
}

function numQuadradoPerfeito(n) {

    const arrQuadradosPerfeitos = criaArrQuadrados(n);
    print(arrQuadradosPerfeitos);
}

let lines = gets(); 
let n = parseInt(lines); 

print(numQuadradoPerfeito(n));
//TODO:Com base no valor total, retorne o menor número de quadrados perfeitos.