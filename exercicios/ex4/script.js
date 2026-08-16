//Crie uma função que receba o precoOriginal e a porcentagemDesconto. Calcule qual será o valor descontado, subtraia do original e retorne: "O produto de R$ X vai sair por R$ Y com Z% de desconto!".
function calcularValor(precoOriginal, porcentagemDesconto) {
    console.log(`O produto de R$ ${precoOriginal} vai sair por R$ ${(precoOriginal - (precoOriginal * (porcentagemDesconto / 100))).toFixed(2)} com ${porcentagemDesconto}% de desconto`);
};
calcularValor(10, 15);