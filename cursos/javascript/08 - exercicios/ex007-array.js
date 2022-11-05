/* 
    7) Crie um programa que seja capaz de percorrer um lista de números e imprima cada número PAR encontrado
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}