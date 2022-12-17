const numbers = [2, 4, 6, 8]
const laranja = { value: 3 }

function mapSemThis(arr) {
    return arr.map(element => {
        return element * 5;
    });
}

function mapComThis(arr, thisArg) {
    return arr.map(function(element) {
        return element * this.value;
    }, thisArg);
}

console.log('Map sem this:', mapSemThis(numbers));
console.log('Map com this:', mapComThis(numbers, laranja));
