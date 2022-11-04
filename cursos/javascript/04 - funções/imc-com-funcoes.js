// Reorganização ex002 com funções

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc <= 18.5) {
        return `Com IMC de ${imc.toFixed(2)}, você está ABAIXO do peso.`;
    } else if (imc <= 25) {
        return `Com IMC de ${imc.toFixed(2)}, você está com pesoal NORMAL.`;
    } else if (imc <= 30) {
        return `Com IMC de ${imc.toFixed(2)}, você está ACIMA do peso.`;
    } else if (imc <= 40) {
        return `Com IMC de ${imc.toFixed(2)}, você está OBESO.`;
    } else {
        return `Com IMC de ${imc.toFixed(2)}, você está em obesidade GRAVE.`;
    }
}

// Main
(function () {
    const peso = 80;
    const altura = 1.78;
    
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();
