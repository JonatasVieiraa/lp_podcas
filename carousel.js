document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('carousel');
    const carouselInner = document.getElementById('carouselInner');

    // Duplica os itens para criar o efeito infinito
    carouselInner.innerHTML += carouselInner.innerHTML += carouselInner.innerHTML += carouselInner.innerHTML;

    // Ajusta a largura do carouselInner para acomodar todos os itens
    const items = carouselInner.getElementsByClassName('carousel-item');
    const itemWidth = items[0].offsetWidth;
    const totalWidth = itemWidth * items.length;
    carouselInner.style.width = `${totalWidth}px`;

    // Reinicia a animação quando o mouse passa sobre o carrossel
    carousel.addEventListener('mouseenter', () => {
        carouselInner.style.animationPlayState = 'paused';
    });

    carousel.addEventListener('mouseleave', () => {
        carouselInner.style.animationPlayState = 'running';
    });
});