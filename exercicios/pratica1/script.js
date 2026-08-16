//Crie um array de objetos {id, nome, qtd} representando um estoque de produtos. Crie um setInterval que simule vendas reduzindo a quantidade de um produto a cada 5 segundos. Use o método .filter() para filtrar apenas os produtos com qtd < 5 e renderize-os na tela, aplicando classList.toggle('alert-pulse', true) para fazer o item piscar no DOM apenas se estiver crítico.
let estoque = [
    {id: 1, nome: 'Boné', qtd: 6},
    {id: 2, nome: 'Sapato', qtd: 6},
    {id: 3, nome: 'Colar', qtd: 6},
    {id: 4, nome: 'Bola de Tenis', qtd: 6},
    {id: 5, nome: 'Camisa', qtd: 6},
    {id: 6, nome: 'Calça Jeans', qtd: 15},
    {id: 7, nome: 'Relógio de Pulso', qtd: 8},
    {id: 8, nome: 'Mochila', qtd: 12},
    {id: 9, nome: 'Cinto de Couro', qtd: 20},
    {id: 10, nome: 'Bermuda', qtd: 14},
    {id: 11, nome: 'Carteira', qtd: 30},
    {id: 12, nome: 'Luvas (Par)', qtd: 5},
    {id: 13, nome: 'Cachecol', qtd: 9},
    {id: 14, nome: 'Gorro', qtd: 11},
    {id: 15, nome: 'Gravata', qtd: 25},
    {id: 16, nome: 'Camiseta Regata', qtd: 18},
    {id: 17, nome: 'Tênis de Corrida', qtd: 7},
    {id: 18, nome: 'Chuteira', qtd: 10},
    {id: 19, nome: 'Bola de Futebol', qtd: 22},
    {id: 20, nome: 'Bola de Basquete', qtd: 15},
    {id: 21, nome: 'Raquete de Tênis', qtd: 4},
    {id: 22, nome: 'Mala de Viagem', qtd: 6},
    {id: 23, nome: 'Bolsa Feminina', qtd: 13},
    {id: 24, nome: 'Saia', qtd: 16},
    {id: 25, nome: 'Vestido', qtd: 9},
    {id: 26, nome: 'Blusa de Frio', qtd: 12},
    {id: 27, nome: 'Moletom', qtd: 8},
    {id: 28, nome: 'Chinelo', qtd: 40},
    {id: 29, nome: 'Sandália', qtd: 17},
    {id: 30, nome: 'Bota', qtd: 5},
    {id: 31, nome: 'Touca de Natação', qtd: 25},
    {id: 32, nome: 'Óculos de Natação', qtd: 19},
    {id: 33, nome: 'Sunga', qtd: 14},
    {id: 34, nome: 'Maiô', qtd: 11},
    {id: 35, nome: 'Biquíni', qtd: 18},
    {id: 36, nome: 'Prancha de Surf', qtd: 3},
    {id: 37, nome: 'Skate', qtd: 6},
    {id: 38, nome: 'Capacete', qtd: 10},
    {id: 39, nome: 'Joelheira', qtd: 22},
    {id: 40, nome: 'Cotoveleira', qtd: 20},
    {id: 41, nome: 'Corda de Pular', qtd: 35},
    {id: 42, nome: 'Halter 5kg', qtd: 16},
    {id: 43, nome: 'Colchonete', qtd: 12},
    {id: 44, nome: 'Garrafa de Água', qtd: 45},
    {id: 45, nome: 'Toalha de Rosto', qtd: 30},
    {id: 46, nome: 'Toalha de Banho', qtd: 28},
    {id: 47, nome: 'Roupão', qtd: 7},
    {id: 48, nome: 'Óculos de Sol', qtd: 15},
    {id: 49, nome: 'Meias (Par)', qtd: 50},
    {id: 50, nome: 'Jaqueta Corta-Vento', qtd: 9},
    {id: 51, nome: 'Smartwatch', qtd: 12},
    {id: 52, nome: 'Fone de Ouvido', qtd: 24},
    {id: 53, nome: 'Carregador Portátil', qtd: 18},
    {id: 54, nome: 'Capa para Celular', qtd: 40},
    {id: 55, nome: 'Película de Vidro', qtd: 60}
];
const renderizacao = function renderizarEstoque() {
    const lista = document.getElementById('estoque-items');
    lista.innerHTML = '';
    estoque.forEach(prod => {
        const li = document.createElement('li');
        li.textContent = `${prod.nome} - Quantidade: ${prod.qtd}`;
        lista.appendChild(li);
        const isCritico = prod.qtd < 5;
        li.classList.toggle('alert-pulse', isCritico);
    });
};
const compras = setInterval( () => {
    const randomIndex = Math.floor(Math.random() * estoque.length);
    if (estoque[randomIndex].qtd > 0) {
        estoque[randomIndex].qtd--;
    };
    const produtoComEstoqueCritico = estoque.filter(prod => prod.qtd < 5);
    console.log("Produtos em estado crítico:", produtoComEstoqueCritico);
    renderizacao();
},5000);
const reestoque = setInterval(() => {
    estoque.forEach(prod => prod.qtd++);
}, 20000);
renderizacao();