document.addEventListener('DOMContentLoaded', () => {
    // Inicializa os ícones
    lucide.createIcons();

    // 1. Troca de Abas
    const navLinks = document.querySelectorAll('.nav-link');
    const tabContents = document.querySelectorAll('.tab-content');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('data-target');
            if (!targetId) return;

            e.preventDefault();

            // Resetar estados
            navLinks.forEach(l => l.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Ativar novos estados
            this.classList.add('active');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
});

// 2. Funções do Modal
function openPreview(name, time) {
    const modal = document.getElementById("previewModal");
    document.getElementById("modalName").innerText = name;
    document.getElementById("modalTime").innerText = "Hoje às " + time;
    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("previewModal").style.display = "none";
}

// Fechar ao clicar fora
window.onclick = function(event) {
    const modal = document.getElementById("previewModal");
    if (event.target == modal) closeModal();
}

document.addEventListener('DOMContentLoaded', () => {
    // Lógica para prévia de imagem (Banner e Avatar)
    const initPrevia = (inputID, imgID) => {
        const input = document.getElementById(inputID);
        const img = document.getElementById(imgID);
        if(!input || !img) return;

        input.addEventListener('change', function() {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = e => img.src = e.target.result;
                reader.readAsDataURL(file);
            }
        });
    };

    initPrevia('upload-banner', 'previa-banner');
    initPrevia('upload-avatar', 'previa-avatar');

    // Lógica de Salvar (Apenas visual)
    const formConfig = document.getElementById('formulario-config');
    if(formConfig) {
        formConfig.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Configurações atualizadas com sucesso!');
        });
    }
});