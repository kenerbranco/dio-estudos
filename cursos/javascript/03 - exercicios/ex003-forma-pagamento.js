/*
    3) Elaborar um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código condição pagamento:
    - À vista débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%.
*/

/* 
    Opção Pagamento: 
    - [1] À vista débito; 
    - [2] À vista dinheiro ou pix;
    - [3] 2x sem juros;
    - [4] 3x ou mais com juros.
*/
const opcaoPagamento = 2;
const precoNormal = 1000;
let precoFinal = 0;

if (opcaoPagamento === 1) {
    precoFinal = precoNormal * 0.9;
    console.log('Selecionado pagamento à vista: débito.');
} else if (opcaoPagamento === 2) {
    precoFinal = precoNormal * 0.85;
    console.log('Selecionado pagamento à vista: dinheiro ou PIX.');
} else if (opcaoPagamento === 3) {
    precoFinal = precoNormal;
    console.log('Selecionado pagamento parcelado: 2x sem juros.');
} else {
    precoFinal = precoNormal * 1.1;
    console.log('Selecionado pagamento parcelado: 3x ou mais com juros.');
}

console.log(`O preço total da compra será de R$${precoFinal.toFixed(2)}`)