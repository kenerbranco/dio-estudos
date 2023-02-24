const { gets, print } = require('./funcoes-auxiliares');

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 

function fatorial(n) {
    let cont = 1; // Contador para as operações / * + -
    let total = n.toString();
    let num = n;
    let i = n;

    for (i; i > 1; i--) {
        
        num = num - 1;
        const numString = num.toString(); 

        if (cont == 1) {
            total = total + "*" + numString;
            cont++;
        } else if (cont == 2) {
            total = total + "/" + numString;
            cont++;
        } else if (cont == 3) {
            total = total + "+" + numString;
            cont++;
        } else if (cont == 4) {
            total = total + "-" + numString;
            cont = 1;
        }
    
    }

    return parseFloat(total);
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