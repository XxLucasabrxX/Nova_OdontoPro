function alternarMenu() {
    document.getElementById('menuLateral').classList.toggle('aberto');
}

function mostrarTela(id, btn) {
    // Esconde todas as telas
    document.querySelectorAll('.tela').forEach(t => t.classList.remove('ativa'));
    // Remove classe ativo de todos os botões
    document.querySelectorAll('.item-menu').forEach(i => i.classList.remove('ativo'));
    
    // Mostra a tela clicada e ativa o botão
    const telaDestino = document.getElementById(id);
    if(telaDestino) {
        telaDestino.classList.add('ativa');
        btn.classList.add('ativo');
    }
}

// Carrossel
let indice = 0;
function carrosselAutomatico() {
    const slides = document.getElementsByClassName("slide-carrossel");
    const pontos = document.getElementsByClassName("ponto");
    if (slides.length === 0) return;
    for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
    indice++;
    if (indice > slides.length) indice = 1;
    for (let i = 0; i < pontos.length; i++) {
        pontos[i].className = pontos[i].className.replace(" ativo", "");
    }
    slides[indice - 1].style.display = "block";
    pontos[indice - 1].className += " ativo";
    setTimeout(carrosselAutomatico, 5000);
}
document.addEventListener('DOMContentLoaded', carrosselAutomatico);