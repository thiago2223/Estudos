//Crie um array chamado notas contendo 4 números. Use o método .reduce() para somar todas as notas e, depois, divida o resultado por 4 para descobrir a média final.
const nota_escolar = {
    nota_lista: [9, 9, 8, 10, 10, 7, 8.5],
    get soma_valor() {
        return this.nota_lista.reduce((acumulador, notaAtual) =>  acumulador + notaAtual, 0);
    },
    get media_valor() {
        return (this.soma_valor / this.nota_lista.length).toFixed(2);
    },
    soma_console() {
        console.log(this.soma_valor);
    },

    media_console() {
        console.log(this.media_valor);
    }
};
nota_escolar.soma_console()
