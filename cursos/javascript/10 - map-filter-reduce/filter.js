const numbers = [1, 2, 3, 4, 5, 6]
const strings = ['maça verde', 'pêra', 'maça fuji', 'laranja']


// Filter para array numbers
function filtraPares(arr) {
    return arr.filter(callbackNumber);
}

function callbackNumber(element) {
    return element % 2 === 0;
}


// Filter para array strings
function filtraMaça(arr) {
    return arr.filter(callbackString);
}

function callbackString(string) {
    return string.includes('maça');
}


console.log('Filtro números pares: ', filtraPares(numbers));
console.log('Filtro contém maça: ', filtraMaça(strings));
