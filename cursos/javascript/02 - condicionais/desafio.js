/* 
    Faça um programa para calcular o valor gasto de combustível em uma viagem.

    Você terá 5 variáveis. Sendo elas:
    1. Preço do etanol;
    2. Preço da gasolina;
    3. O tipo de combustível que está no seu carro;
    4. Gasto médio de combustível do carro por Km;
    5. Distância em Km da viagem.

    Imprima na tela o valor gasto na viagem.
*/

let gastoTotal = 0;
const tipoCombustivel = 'etanol';
const precoEtanol = 3;
const precoGasolina = 5;
const gastoMedioCarro = 10;
const distanciaViagem = 100;

if (tipoCombustivel === 'etanol') {
    gastoTotal = (distanciaViagem / gastoMedioCarro) * precoEtanol;
} else if (tipoCombustivel === 'gasolina') {
    gastoTotal = (distanciaViagem / gastoMedioCarro) * precoGasolina;
}

console.log(`Gasto total da viagem: R$ ${gastoTotal.toFixed(2)}`);
