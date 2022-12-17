// Some todos os números de um array
const numbers = [3, 5, 20, 21, 30, 36]


function sumArray(arr) {
    return arr.reduce(callback, 0);
}

function callback(accumulator, currentValue) {
    return accumulator + currentValue;
}


console.log('Soma com reduce:', sumArray(numbers));


// Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.
const price = [10, 12, 20, 50, 36, 62]
const balance = 900;


function subValues(arr) {
    return arr.reduce(callbackPreços, balance);
}

function callbackPreços(accumulator, currentValue) {
    return accumulator - currentValue;
}


console.log('Saldo inicial:', balance);
console.log('Restante disponível:', subValues(price));
console.log(price);