const { gets, print } = require('./funcoes-auxiliares');

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 

function criaArray(n) {
    
    let arr = [];
    let num = n;
    arr[0] = num;

    for (let i=1; i<n; i++) {

        num = num - 1;
        arr[i] = num;

    }

    return arr;
     
}

function fatorial(n) {
    
    const arrNumeros = criaArray(n);
    let cont = 1;
    let num = arrNumeros[0];
    let arrSomaFinal = [];

    for (let i=1; i<arrNumeros.length; i++) {

        if (cont == 1) {
            num = num * arrNumeros[i];
            cont++;
            if (i == (arrNumeros.length - 1)) {
                arrSomaFinal.push(parseInt(num));
            }
        } else if (cont == 2) {
            num = num / arrNumeros[i];
            cont++;
            arrSomaFinal.push(parseInt(num));
        } else if (cont == 3) {
            arrSomaFinal.push(arrNumeros[i]);
            cont++;
        } else if (cont == 4) {
            num = arrNumeros[i];
            cont = 1;
            if (i == (arrNumeros.length - 1)) {
                arrSomaFinal.push(parseInt(num));
            }
        }

    }

    const valorFinal = arrSomaFinal.reduce((accumulator, currentValue, index) => {

        if (index % 2 != 0) {
            return accumulator + currentValue;
        } else {
            return accumulator - currentValue;
        }

    });

    return valorFinal;

}


let lines = gets(); 
let n = parseInt(lines);

if (n <= 2) { 

 print(n); 

} else {

    const r = fatorial(n);
    print(r);

}

// TODO: Calcule o valor do fatorial de "n", atribuindo o retorno a "r".