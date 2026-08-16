// ==========================================================
// 1. BANCO DE DADOS INICIAL E LOCAL STORAGE
// ==========================================================
const produtosExemplo = [
    {
        id: 1,
        nome: "Jaqueta Cyberpunk 2026",
        tipo: "vestimenta",
        descricao: "Jaqueta com LEDs embutidos e tecido corta-vento.",
        imagem: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500"
    },
    {
        id: 2,
        nome: "Óculos de Realidade Mista",
        tipo: "acessorio",
        descricao: "Óculos leve com projeção holográfica integrada.",
        imagem: "https://images.unsplash.com/photo-1574607383471-460d3d49f0cd?w=500"
    },
    {
        id: 3,
        nome: "Mochila Anti-Gravidade",
        tipo: "item",
        descricao: "Reduz o peso da carga em até 40% usando campos magnéticos.",
        imagem: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
    }
];

// Gerencia o "caderninho" do navegador
function obterEstoque() {
    let estoqueSalvo = localStorage.getItem('meusProdutos');
    if (estoqueSalvo === null) {
        localStorage.setItem('meusProdutos', JSON.stringify(produtosExemplo));
        return produtosExemplo;
    } else {
        return JSON.parse(estoqueSalvo);
    }
}


// ==========================================================
// 2. RENDERIZAÇÃO NA VITRINE (Usando Crases e `${}`)
// ==========================================================
function renderizarProdutos(listaDeProdutos) {
    const vitrine = document.getElementById('produtos');
    if (!vitrine) return; 

    vitrine.innerHTML = '';

    if (listaDeProdutos.length === 0) {
        vitrine.innerHTML = '<p style="color: #94a3b8;">Nenhum produto encontrado.</p>';
        return;
    }

    listaDeProdutos.forEach(produto => {
        let cardHTML = `
            <div class="produto-card">
                <img src="${produto.imagem}" class="produto-img" alt="${produto.nome}">
                <div class="produto-info">
                    <h3>${produto.nome}</h3>
                    <p class="descricao">${produto.descricao}</p>
                </div>
            </div>
        `;
        vitrine.innerHTML += cardHTML;
    });
}


// ==========================================================
// 3. SISTEMA DE PESQUISA EM TEMPO REAL
// ==========================================================
const inputPesquisa = document.getElementById('input-pesquisa');

if (inputPesquisa) {
    inputPesquisa.addEventListener('input', (evento) => {
        let textoDigitado = evento.target.value.toLowerCase();
        let estoque = obterEstoque();

        let listaFiltrada = estoque.filter(produto => {
            return produto.nome.toLowerCase().includes(textoDigitado);
        });

        renderizarProdutos(listaFiltrada);
    });
}


// ==========================================================
// 4. CADASTRO DE NOVOS PRODUTOS
// ==========================================================
const formularioCadastro = document.getElementById('form-cadastro');

if (formularioCadastro) {
    formularioCadastro.addEventListener('submit', (evento) => {
        evento.preventDefault(); 

        let nomeInput = document.getElementById('nomeProduto').value;
        let fotoInput = document.getElementById('urlFoto').value;
        let tipoInput = document.getElementById('tipoProduto').value;
        let descInput = document.getElementById('descProduto').value;

        let novoProduto = {
            id: Date.now(),
            nome: nomeInput,
            tipo: tipoInput,
            descricao: descInput,
            imagem: fotoInput
        };

        let estoqueAtual = obterEstoque();
        estoqueAtual.push(novoProduto);
        localStorage.setItem('meusProdutos', JSON.stringify(estoqueAtual));

        window.location.href = 'index.html';
    });
}


// ==========================================================
// 5. SELEÇÃO DE FILTROS E TRANSIÇÕES DE PÁGINA
// ==========================================================
// Seleção visual dos botões de filtro
const botoesFiltro = document.querySelectorAll('.btn-filter');
botoesFiltro.forEach(botao => {
    botao.addEventListener('click', (evento) => {
        botoesFiltro.forEach(b => b.classList.remove('active'));
        evento.target.classList.add('active');
    });
});

// Transição suave (fade-out) ao trocar de página nos links
const linksTransicao = document.querySelectorAll('.btn-nav');
linksTransicao.forEach(link => {
    link.addEventListener('click', (evento) => {
        evento.preventDefault();
        const destino = link.href;
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = destino;
        }, 400);
    });
});

// Executa a listagem inicial ao abrir a página da loja
renderizarProdutos(obterEstoque());