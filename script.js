// Espera o conteúdo carregar antes de rodar
document.addEventListener('DOMContentLoaded', function() {

    // ===== BOTÃO DE ACESSIBILIDADE =====
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

    botaoDeAcessibilidade.addEventListener('click', function() {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');

        const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
        botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado);
    });

    // ===== AUMENTAR E DIMINUIR FONTE =====
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function() {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    diminuiFonteBotao.addEventListener('click', function() {
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    // ===== ALTO CONTRASTE =====
    const alternaContraste = document.getElementById('alterna-contraste');

    alternaContraste.addEventListener('click', function() {
        document.body.classList.toggle('alto-contraste');
    });

});

// ===== ANIMAÇÕES COM SCROLLREVEAL =====
ScrollReveal().reveal('#inicio', { delay: 500 });
ScrollReveal().reveal('#sobre', { delay: 500 });
ScrollReveal().reveal('#projetos', { delay: 500 });
ScrollReveal().reveal('#contato', { delay: 500 });
