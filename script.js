document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA DO MENU MOBILE ---
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const links = document.querySelectorAll('.mobile-link');

    // Abre e fecha o menu ao clicar no botão Hamburguer
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    // Esconde o menu mobile automaticamente quando um link é clicado
    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
        });
    });

    // --- LÓGICA DE ANIMAÇÃO NO SCROLL (Scroll Reveal) ---
    const reveals = document.querySelectorAll('.reveal');
    
    // Configura o "Observador" da tela
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Se o elemento entrou na visão da tela (isIntersecting)
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); // Adiciona a classe que mostra o elemento
                observer.unobserve(entry.target);     // Para de observar para não animar 2x
            }
        });
    }, { 
        root: null, 
        threshold: 0.1, // Dispara quando 10% do elemento aparece
        rootMargin: "0px 0px -50px 0px" 
    });

    // Aplica o observador em cada elemento com a classe .reveal
    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });
});