document.addEventListener('DOMContentLoaded', () => {
    // Inicializa ícones
    if (typeof lucide !== 'undefined') lucide.createIcons();

    const navLinks = document.querySelectorAll('.nav-link');
    const tabContents = document.querySelectorAll('.tab-content');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // 1. Pega o ID da aba que queremos mostrar
            const targetId = this.getAttribute('data-target');
            
            // Se o link não tiver data-target (como o "Sair"), não faz nada
            if (!targetId) return;

            // 2. Remove a classe 'active' de TODOS os links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // 3. Esconde TODAS as seções de conteúdo
            tabContents.forEach(content => {
                content.classList.remove('active');
                content.style.display = 'none'; 
            });

            // 4. Ativa o link atual
            this.classList.add('active');

            // 5. Mostra a seção desejada
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
                targetSection.style.display = 'block';
            }
        });
    });
});

// Funções do Modal
function openPreview(name, time) {
    const modal = document.getElementById("previewModal");
    document.getElementById("modalName").innerText = name;
    document.getElementById("modalTime").innerText = "Hoje às " + time;
    modal.style.display = "flex"; // Use flex para centralizar melhor
}

function closeModal() {
    document.getElementById("previewModal").style.display = "none";
}

function openPreview(name, time) {
    const modal = document.getElementById("previewModal");
    const modalContent = modal.querySelector('.modal-content');
    
    // Altera os dados
    document.getElementById("modalName").innerText = name;
    document.getElementById("modalTime").innerText = "Horário agendado: " + time;
    
    // Exibe com uma leve transição
    modal.style.display = "block";
}

function openPreview(name, time) {
    const modal = document.getElementById("previewModal");
    document.getElementById("modalName").innerText = name;
    document.getElementById("modalTime").innerText = "Horário: " + time;
    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("previewModal").style.display = "none";
}

// Fechar modal ao clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById("previewModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}