function alternarMenu() {
    document.getElementById('menuLateral').classList.toggle('aberto');
}

function mostrarTela(id, btn) {
    const telas = document.querySelectorAll('.tela');
    const itensMenu = document.querySelectorAll('.item-menu');

    telas.forEach(tela => {
        tela.classList.remove('ativa');
        tela.style.display = "none"; 
    });
    
    itensMenu.forEach(item => item.classList.remove('ativo'));

    const telaAtiva = document.getElementById(id);
    if (telaAtiva) {
        telaAtiva.classList.add('ativa');
        telaAtiva.style.display = "block"; 
        if(btn) btn.classList.add('ativo');
    }
}

// Busca e Carrossel
document.addEventListener('DOMContentLoaded', () => {
    const inputBusca = document.getElementById('inputBuscaClinica');
    if (inputBusca) {
        inputBusca.addEventListener('input', function() {
            const termo = this.value.toLowerCase();
            document.querySelectorAll('.card-clinica').forEach(card => {
                const nome = card.querySelector('h3').textContent.toLowerCase();
                card.style.display = nome.includes(termo) ? "block" : "none";
            });
        });
    }
    carrosselAutomatico();
});

let indice = 0;
function carrosselAutomatico() {
    const slides = document.getElementsByClassName("slide-carrossel");
    const pontos = document.getElementsByClassName("ponto");
    if (slides.length === 0) return;
    for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
    indice++;
    if (indice > slides.length) indice = 1;
    for (let i = 0; i < pontos.length; i++) pontos[i].className = pontos[i].className.replace(" ativo", "");
    if(slides[indice-1]) slides[indice-1].style.display = "block";
    if(pontos[indice-1]) pontos[indice-1].className += " ativo";
    setTimeout(carrosselAutomatico, 5000);
}

document.addEventListener('DOMContentLoaded', () => {
    const inputBusca = document.getElementById('inputBuscaClinica');
    
    // Função de Busca em Tempo Real
    if (inputBusca) {
        inputBusca.addEventListener('input', function() {
            const termoBusca = this.value.toLowerCase();
            const cards = document.querySelectorAll('.card-clinica');

            cards.forEach(card => {
                const nomeClinica = card.querySelector('h3').textContent.toLowerCase();
                
                if (nomeClinica.includes(termoBusca)) {
                    card.style.display = "flex"; // Mostra o card
                } else {
                    card.style.display = "none"; // Esconde o card
                }
            });
        });
    }
});

// Função para trocar de tela (Caso precise)
function mostrarTela(id, btn) {
    document.querySelectorAll('.tela').forEach(t => t.classList.remove('ativa'));
    document.querySelectorAll('.item-menu').forEach(i => i.classList.remove('ativo'));
    
    const telaDestino = document.getElementById(id);
    if (telaDestino) {
        telaDestino.classList.add('ativa');
        btn.classList.add('ativo');
    }
}

function mostrarTela(id, btn) {
    // Esconde todas as telas
    document.querySelectorAll('.tela').forEach(t => t.classList.remove('ativa'));
    
    // Remove a classe ativo de todos os botões
    document.querySelectorAll('.item-menu').forEach(i => i.classList.remove('ativo'));
    
    // Mostra a tela selecionada e ativa o botão
    const tela = document.getElementById(id);
    if (tela) {
        tela.classList.add('ativa');
        btn.classList.add('ativo');
        
        // No mobile, faz o scroll subir ao trocar de tela
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.querySelector('.area-conteudo').scrollTo({ top: 0, behavior: 'smooth' });
    }
}