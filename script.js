function enviarWhats (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5591993007042';

    if (!nome.trim() || !mensagem.trim()) {
    alert('Por favor, preencha seu nome e a mensagem antes de enviar.');
    return;
    }

    const texto = `Olá! Me chamo ${nome}, ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);
    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

    window.open(url, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
    const menuHamburguer = document.querySelector('.menu-hamburguer');
    const menu = document.querySelector('.Menu');

    menuHamburguer.addEventListener('click', () => {
        menu.classList.toggle('ativo');
    });

    const menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('ativo');
        });
    });
});