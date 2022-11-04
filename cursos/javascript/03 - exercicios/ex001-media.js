/*
    1) Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

    média = (nota1 + nota2 + nota3) / 3;

    Classificação:
    - Média menor que 5, reprovado;
    - Média entre 5 a 7, recuperação;
    - Média acima de 7, passou de semestre.
*/

const nota1 = 8;
const nota2 = 10;
const nota3 = 5;

const media = (nota1 + nota2 + nota3) / 3;
console.log(`Média: ${media.toFixed(2)}`)

if (media <= 5) {
    console.log('Situação: Reprovado');
} else if (media <= 7) {
    console.log('Situação: Recuperação');
} else {
    console.log('Situação: Aprovado');
}
