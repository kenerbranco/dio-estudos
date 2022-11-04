// Classe
class Pessoa {
    nome;
    idade;
    anoDeNascimento;
    
    constructor(nome, idade) { // Obriga a instância ter estes atributos - prepara atributos
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

// Instância-Objeto
const kener = new Pessoa('Kener', 28);
const laiane = new Pessoa('Laiane', 28);

console.log(kener);
