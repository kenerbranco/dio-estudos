/*
    2) O IMC - Indice de Massa Corporal é um critério da Organização Mundial da Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

    Fórmula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

    IMC em adultos:
    - Abaixo de 18.5: Abaixo do peso;
    - Entre 18.5 e 25: Peso normal;
    - Entre 25 e 30: Acima do peso;
    - Entre 30 e 40: Obeso;
    - Acima de 40: Obesidade grave.
*/

const peso = 120;
const altura = 1.78;
const imc = peso / Math.pow(altura, 2);

if (imc <= 18.5) {
    console.log(`Com IMC de ${imc.toFixed(2)}, você está ABAIXO do peso.`);
} else if (imc <= 25) {
    console.log(`Com IMC de ${imc.toFixed(2)}, você está com pesoal NORMAL.`);
} else if (imc <= 30) {
    console.log(`Com IMC de ${imc.toFixed(2)}, você está ACIMA do peso.`);
} else if (imc <= 40) {
    console.log(`Com IMC de ${imc.toFixed(2)}, você está OBESO.`);
} else {
    console.log(`Com IMC de ${imc.toFixed(2)}, você está em obesidade GRAVE.`);
}