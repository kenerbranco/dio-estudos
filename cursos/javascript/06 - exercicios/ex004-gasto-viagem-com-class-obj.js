/*
    4) Crie uma classe para representar carros.
    Os carros possuem um marca, um cor e um gasto médio de combustível por Kilômetro rodado.
    Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    consumoMedio;

    constructor(marca, cor, consumoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.consumoMedio = consumoMedio;
    }

    calcularGastoViagem(distanciaKm, precoCombustivel) {
        return (distanciaKm / this.consumoMedio) * precoCombustivel;
    }
}

const punto = new Carro('Fiat', 'Preto', 10);
const hb20 = new Carro('Hyundai', 'Branco', 8);

console.log(punto.calcularGastoViagem(100, 5));
console.log(hb20.calcularGastoViagem(200, 7));
