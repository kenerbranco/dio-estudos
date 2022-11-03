/* 
    Faça um programa para calcular o valor gasto de combustível em uma viagem.

    Você terá 3 variáveis. Sendo elas:
    1. Preço do combustível;
    2. Gasto médio de combustível do carro por Km;
    3. Distância em Km da viagem.

*/

const preco_comb = 5; // R$/l
const carro_cons = 10; // Km/l
const dist_viagem = 100; // Km

const gasto_tot = (dist_viagem / carro_cons) * preco_comb;
console.log(`O gasto total da viagem será de R$${gasto_tot.toFixed(2)}.`); // toFixed = arrendondamento