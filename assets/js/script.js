// ===== VARIÁVEIS GLOBAIS =====
let conceitos = [];
let conceitosExibidos = [];
let materiaAtual = 'todas';

// ===== MENU HAMBÚRGUER =====
function inicializarMenuMobile() {
    const menuToggle = document.getElementById('menu-toggle');
    const searchContainer = document.getElementById('search-container');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            searchContainer.classList.toggle('active');
        });
        
        // Fechar menu ao clicar em qualquer botão de filtro
        const botoesFiltro = document.querySelectorAll('.btn-filter, .btn-clear, .btn-search');
        botoesFiltro.forEach(botao => {
            botao.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    menuToggle.classList.remove('active');
                    searchContainer.classList.remove('active');
                }
            });
        });
    }
}

// ===== CARREGAMENTO INICIAL =====
async function carregarConceitos() {
    try {
        const resposta = await fetch('data/conceitos.json');
        conceitos = await resposta.json();
        conceitosExibidos = conceitos;
        renderizarConceitos(conceitos);
        atualizarEstatisticas(conceitos.length, conceitos.length);
        inicializarMenuMobile();
    } catch (erro) {
        console.error('Erro ao carregar conceitos:', erro);
        mostrarErro();
    }
}

// ===== RENDERIZAÇÃO =====
function renderizarConceitos(lista) {
    const grid = document.getElementById('conceitos-grid');
    const emptyState = document.getElementById('empty-state');
    
    grid.innerHTML = '';
    
    if (lista.length === 0) {
        emptyState.style.display = 'block';
        return;
    }
    
    emptyState.style.display = 'none';
    
    lista.forEach(conceito => {
        const card = criarCard(conceito);
        grid.appendChild(card);
    });
}

function criarCard(conceito) {
    const article = document.createElement('article');
    article.className = 'conceito-card';
    
    const badgeClass = conceito.materia === 'História Econômica Geral' 
        ? 'badge-historia' 
        : 'badge-macro';
    
    const relevanciaIcon = conceito.relevancia === 'alta' ? '⭐' : '📌';
    
    const tagsHTML = conceito.tags
        .map(tag => `<span class="tag">#${tag}</span>`)
        .join('');
    
    article.innerHTML = `
        <div class="card-header">
            <span class="materia-badge ${badgeClass}">
                ${conceito.materia === 'História Econômica Geral' ? 'História Econômica' : 'Macroeconomia 1'}
            </span>
            <span class="relevancia-tag" title="${conceito.relevancia === 'alta' ? 'Alta relevância' : 'Relevância média'}">
                ${relevanciaIcon}
            </span>
        </div>
        <p class="card-topico">${conceito.topico}</p>
        <h2 class="card-conceito">${conceito.conceito}</h2>
        <p class="card-definicao">${conceito.definicao}</p>
        <div class="card-tags">${tagsHTML}</div>
    `;
    
    return article;
}

// ===== BUSCA =====
function buscarConceitos() {
    const campoBusca = document.getElementById('campo-busca');
    const termo = campoBusca.value.trim().toLowerCase();
    
    if (!termo) {
        aplicarFiltros();
        return;
    }
    
    const resultados = conceitos.filter(conceito => {
        const buscaNoConceito = conceito.conceito.toLowerCase().includes(termo);
        const buscaNaDefinicao = conceito.definicao.toLowerCase().includes(termo);
        const buscaNoTopico = conceito.topico.toLowerCase().includes(termo);
        const buscaNasTags = conceito.tags.some(tag => tag.toLowerCase().includes(termo));
        
        const matchMateria = materiaAtual === 'todas' || conceito.materia === materiaAtual;
        
        return (buscaNoConceito || buscaNaDefinicao || buscaNoTopico || buscaNasTags) && matchMateria;
    });
    
    conceitosExibidos = resultados;
    renderizarConceitos(resultados);
    atualizarEstatisticas(resultados.length, conceitos.length);
}

// ===== FILTROS =====
function filtrarMateria(materia) {
    // Atualizar botões ativos
    document.querySelectorAll('.btn-filter').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const btnClicado = event.target;
    btnClicado.classList.add('active');
    
    // Armazenar matéria atual
    if (materia === 'todas') {
        materiaAtual = 'todas';
    } else {
        materiaAtual = materia;
    }
    
    aplicarFiltros();
}

function aplicarFiltros() {
    const campoBusca = document.getElementById('campo-busca');
    const termo = campoBusca.value.trim().toLowerCase();
    
    let resultados = conceitos;
    
    // Filtrar por matéria
    if (materiaAtual !== 'todas') {
        resultados = resultados.filter(conceito => conceito.materia === materiaAtual);
    }
    
    // Filtrar por termo de busca
    if (termo) {
        resultados = resultados.filter(conceito => {
            const buscaNoConceito = conceito.conceito.toLowerCase().includes(termo);
            const buscaNaDefinicao = conceito.definicao.toLowerCase().includes(termo);
            const buscaNoTopico = conceito.topico.toLowerCase().includes(termo);
            const buscaNasTags = conceito.tags.some(tag => tag.toLowerCase().includes(termo));
            
            return buscaNoConceito || buscaNaDefinicao || buscaNoTopico || buscaNasTags;
        });
    }
    
    conceitosExibidos = resultados;
    renderizarConceitos(resultados);
    atualizarEstatisticas(resultados.length, conceitos.length);
}

function limparBusca() {
    document.getElementById('campo-busca').value = '';
    materiaAtual = 'todas';
    
    // Resetar botões
    document.querySelectorAll('.btn-filter').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector('[data-filter="todas"]').classList.add('active');
    
    conceitosExibidos = conceitos;
    renderizarConceitos(conceitos);
    atualizarEstatisticas(conceitos.length, conceitos.length);
}

// ===== ESTATÍSTICAS =====
function atualizarEstatisticas(exibidos, total) {
    const statsBar = document.getElementById('stats-bar');
    const statsText = statsBar.querySelector('.stats-text');
    
    if (exibidos === total) {
        statsText.textContent = `📚 Exibindo ${total} conceitos de Economia`;
    } else {
        statsText.textContent = `🔍 Encontrados ${exibidos} de ${total} conceitos`;
    }
}

// ===== TRATAMENTO DE ERROS =====
function mostrarErro() {
    const grid = document.getElementById('conceitos-grid');
    grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: #999;">
            <p style="font-size: 3rem; margin-bottom: 1rem;">⚠️</p>
            <h2>Erro ao carregar conceitos</h2>
            <p>Por favor, verifique sua conexão e tente novamente.</p>
        </div>
    `;
}

// ===== BUSCA COM ENTER =====
document.addEventListener('DOMContentLoaded', () => {
    const campoBusca = document.getElementById('campo-busca');
    
    campoBusca.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            buscarConceitos();
        }
    });
    
    // Carregar conceitos ao iniciar
    carregarConceitos();
});