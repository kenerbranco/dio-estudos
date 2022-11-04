function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = valor * (percentualJuros / 100);
    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));
console.log(incrementarJuros(100, 20));
