function escolherPagamento(opcao, precoNormal) {
    if (opcao === 1) {
        console.log('Selecionado pagamento à vista: débito.');
        return precoNormal * 0.9;
    } else if (opcao === 2) {
        console.log('Selecionado pagamento à vista: dinheiro ou PIX.');
        return precoNormal * 0.85;
    } else if (opcao === 3) {
        console.log('Selecionado pagamento parcelado: 2x sem juros.');
        return precoNormal;
    } else {
        console.log('Selecionado pagamento parcelado: 3x ou mais com juros.');
        return precoNormal * 1.1;
    }
}

(function () {
    let precoFinal = escolherPagamento(2, 1000);
    console.log(`O preço total da compra será de R$${precoFinal.toFixed(2)}`)
})();
