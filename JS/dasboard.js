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

// Funções do Modal
function abrirModal(clinica, dentista, data, hora, procedimento, endereco) {
    const modal = document.getElementById('modalDetalhes');
    
    // Preenche os campos do modal
    document.getElementById('modalClinica').innerText = clinica;
    document.getElementById('modalEndereco').innerText = endereco;
    document.getElementById('modalDentista').innerText = dentista;
    document.getElementById('modalDataHora').innerText = `${data} às ${hora}`;
    document.getElementById('modalProcedimento').innerText = procedimento;
    
    
    
    modal.style.display = 'flex';
}

function fecharModal() {
    document.getElementById('modalDetalhes').style.display = 'none';
}

// Fecha o modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('modalDetalhes');
    if (event.target == modal) {
        fecharModal();
    }
}

// Variável para controlar se estamos no modo visualização ou edição
let modoEdicao = false;

function fecharModal() {
    document.getElementById('modalDetalhes').style.display = 'none';
    resetarModal(); // Garante que o modal volte ao estado inicial ao fechar
}

function resetarModal() {
    modoEdicao = false;
    document.getElementById('infoConsulta').style.display = 'block';
    document.getElementById('formReagendar').style.display = 'none';
    document.getElementById('btnAcaoPrincipal').innerText = 'Reagendar';
    document.getElementById('btnAcaoPrincipal').style.background = 'var(--azul-claro)';
}

function prepararReagendamento() {
    const info = document.getElementById('infoConsulta');
    const form = document.getElementById('formReagendar');
    const btn = document.getElementById('btnAcaoPrincipal');

    if (!modoEdicao) {
        // Entra no modo de escolha de data
        info.style.display = 'none';
        form.style.display = 'block';
        btn.innerText = 'Confirmar Nova Data';
        btn.style.background = 'var(--verde-sucesso)';
        modoEdicao = true;
    } else {
        // Lógica para Salvar o Reagendamento
        const data = document.getElementById('novaData').value;
        const hora = document.getElementById('novoHorario').value;

        if (data && hora) {
            // Aqui você faria a chamada para o banco de dados futuramente
            alert(`Sucesso! Sua consulta foi reagendada para ${data} às ${hora}.`);
            
            // Atualiza visualmente o modal (opcional)
            document.getElementById('modalDataHora').innerText = `${data} às ${hora}`;
            
            fecharModal();
        } else {
            alert("Por favor, selecione a data e o horário.");
        }
    }
}

function trocarAba(event, abaId) {
    // Esconde todos os conteúdos
    document.querySelectorAll('.conteudo-aba').forEach(aba => {
        aba.classList.remove('ativa');
    });

    // Remove classe ativa de todos os botões
    document.querySelectorAll('.aba-item').forEach(btn => {
        btn.classList.remove('ativa');
    });

    // Mostra a aba clicada e ativa o botão
    document.getElementById(abaId).classList.add('ativa');
    event.currentTarget.classList.add('ativa');
}