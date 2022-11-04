const pessoa = {
    nome: 'Kener',
    idade: 28,

    descrever: function () { 
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

// Formas de acessar valores do objeto, assim como alterá-los
console.log(pessoa['nome']);
console.log(pessoa.nome);
