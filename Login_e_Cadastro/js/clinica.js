document.addEventListener('DOMContentLoaded', () => {
    // Seções
    const secoes = {
        login: document.getElementById('secao-login'),
        cadastro: document.getElementById('secao-cadastro'),
        pagamento: document.getElementById('secao-pagamento'),
        sucesso: document.getElementById('secao-sucesso')
    };

    // Botões e Links
    const linkCadastro = document.getElementById('link-cadastro');
    const linksVoltar = document.querySelectorAll('.link-voltar-login');
    const formCadastro = document.getElementById('form-cadastro');
    const btnConfirmar = document.getElementById('btn-confirmar-pagamento');

    // Função para mostrar apenas uma seção
    function mostrarTela(nomeDaTela) {
        Object.values(secoes).forEach(s => s.classList.add('hidden'));
        secoes[nomeDaTela].classList.remove('hidden');
    }

    // Ações
    linkCadastro.addEventListener('click', (e) => {
        e.preventDefault();
        mostrarTela('cadastro');
    });

    linksVoltar.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarTela('login');
        });
    });

    formCadastro.addEventListener('submit', (e) => {
        e.preventDefault();
        mostrarTela('pagamento');
    });

    btnConfirmar.addEventListener('click', () => {
        btnConfirmar.innerText = "Verificando...";
        setTimeout(() => {
            mostrarTela('sucesso');
        }, 2000);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // ... manter lógica anterior de trocas de seções (login/cadastro/pix) ...

    // Seletores Esqueci Senha
    const linkEsqueci = document.querySelector('.link-esqueci');
    const modalEsqueci = document.getElementById('modal-esqueci');
    const btnFecharModal = document.querySelector('.fechar-modal');
    
    // Etapas do Modal
    const etapaEmail = document.getElementById('etapa-email');
    const etapaCodigo = document.getElementById('etapa-codigo');
    const etapaNovaSenha = document.getElementById('etapa-nova-senha');

    // Botões do Modal
    const btnEnviarCodigo = document.getElementById('btn-enviar-codigo');
    const btnValidarCodigo = document.getElementById('btn-validar-codigo');
    const btnResetarSenha = document.getElementById('btn-resetar-senha');

    // Abrir Modal
    linkEsqueci.onclick = (e) => {
        e.preventDefault();
        modalEsqueci.classList.remove('hidden');
    };

    // Fechar Modal
    btnFecharModal.onclick = () => {
        modalEsqueci.classList.add('hidden');
        resetarEtapasModal();
    };

    // ETAPA 1 -> 2: Enviar E-mail
    btnEnviarCodigo.onclick = () => {
        const email = document.getElementById('recuperar-email').value;
        if(email) {
            btnEnviarCodigo.innerText = "Enviando...";
            setTimeout(() => {
                etapaEmail.classList.add('hidden');
                etapaCodigo.classList.remove('hidden');
            }, 1000);
        } else { alert("Digite um e-mail válido!"); }
    };

    // ETAPA 2 -> 3: Validar Código
    btnValidarCodigo.onclick = () => {
        const codigo = document.getElementById('input-codigo').value;
        if(codigo.length === 6) {
            etapaCodigo.classList.add('hidden');
            etapaNovaSenha.classList.remove('hidden');
        } else { alert("O código deve ter 6 dígitos!"); }
    };

    // ETAPA 3 -> FIM: Resetar e voltar ao Login
    btnResetarSenha.onclick = () => {
        const senha = document.getElementById('nova-senha').value;
        if(senha.length >= 6) {
            alert("Senha alterada com sucesso! Faça login agora.");
            modalEsqueci.classList.add('hidden');
            resetarEtapasModal();
        } else { alert("A senha deve ter pelo menos 6 caracteres."); }
    };

    function resetarEtapasModal() {
        etapaEmail.classList.remove('hidden');
        etapaCodigo.classList.add('hidden');
        etapaNovaSenha.classList.add('hidden');
        btnEnviarCodigo.innerText = "Enviar Código";
    }
});

document.addEventListener('DOMContentLoaded', () => {
    console.log("Script carregado com sucesso!");

    const formLogin = document.getElementById('form-login');
    const btnGoogle = document.querySelector('.botao-google');

    // Função para Login Normal
   if (formLogin) {
        formLogin.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // CAMINHO BASEADO NA SUA IMAGEM:
            // Sair de 'html', sair de 'Login_e_Cadastro' e entrar em 'Dasboard_Profissional'
            // IMPORTANTE: Usei 'painel.html' porque é como aparece no seu print
            window.location.href = "../../Dasboard_Profissional/html/painel.html";
        });
    }

    // Função para Botão Google
    if (btnGoogle) {
        btnGoogle.addEventListener('click', (e) => {
            e.preventDefault();
            console.log("Botão Google clicado");
            
            // Verifique se o nome é Dasboard ou Dashboard no seu arquivo
            window.location.href = "../../Dasboard_Profissional/html/painel.html";
        });
    }
});