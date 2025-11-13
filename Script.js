document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Toggle do Menu Mobile ---
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    const mainNav = document.getElementById('main-nav');

    if (mobileNavToggle && mainNav) {
        mobileNavToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            
            // Mudar ícone (hambúrguer/X)
            const icon = mobileNavToggle.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                mobileNavToggle.setAttribute('aria-label', 'Fechar menu');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                mobileNavToggle.setAttribute('aria-label', 'Abrir menu');
            }
        });
    }

    // --- 2. Dropdown do Carrinho ---
    const cartIcon = document.getElementById('cart-icon');
    const cartDropdown = document.getElementById('cart-dropdown');

    if (cartIcon && cartDropdown) {
        cartIcon.addEventListener('click', (event) => {
            event.preventDefault(); // Prevenir navegação
            cartDropdown.classList.toggle('show');
        });

        // Fechar dropdown se clicar fora
        document.addEventListener('click', (event) => {
            if (!cartIcon.contains(event.target) && !cartDropdown.contains(event.target)) {
                cartDropdown.classList.remove('show');
            }
        });
    }

    // --- 3. Timer de Contagem Regressiva ---
    const countdownElement = document.getElementById('countdown-timer');

    if (countdownElement) {
        // Definir a data final da promoção (ex: 3 dias a partir de agora)
        const countdownDate = new Date().getTime() + (3 * 24 * 60 * 60 * 1000); // 3 dias

        const updateCountdown = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            // Cálculos de tempo
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Adicionar zero à esquerda
            const format = (num) => String(num).padStart(2, '0');

            // Atualizar o HTML
            countdownElement.innerHTML = `Termina em: <span>${format(days)}d ${format(hours)}h ${format(minutes)}m ${format(seconds)}s</span>`;

            // Quando o timer acabar
            if (distance < 0) {
                clearInterval(updateCountdown);
                countdownElement.innerHTML = "<span>Ofertas Encerradas!</span>";
            }
        }, 1000);
    }

});