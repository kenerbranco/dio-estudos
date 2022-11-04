/*
    4) Crie uma classe para representar carros.
    Os carros possuem um marca, um cor e um gasto médio de combustível por Kilômetro rodado.
    Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro {
    modelo;
    marca;
    cor;
    consumoMedio;

    constructor(modelo, marca, cor, consumoMedio) {
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.consumoMedio = consumoMedio;
    }
}

function calcularGastoViagem(carro, distanciaKm, precoCombustivel) {
    const gastoViagem = (distanciaKm / carro.consumoMedio) * precoCombustivel;
    console.log(`O ${carro.modelo} ${carro.cor} da marca ${carro.marca}, terá um gasto de R$${gastoViagem} nesta viagem.`);
}

const carro1 = new Carro('Punto', 'Fiat', 'Preto', 10);
const carro2 = new Carro('HB20','Hyundai', 'Branco', 8);

calcularGastoViagem(carro1, 100, 5);
calcularGastoViagem(carro2, 200, 7);
