/*
    06) Crie um programa que dado um número imprima a sua tabuada.
*/

function calcularTabuada(num) {
    for(let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

calcularTabuada(5);
