document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.getElementById('ctaButton');
    
    ctaButton.addEventListener('click', function() {
        alert('Obrigado por se inscrever no nosso PodCast!');
        // Aqui você pode adicionar a lógica real de inscrição
    });

    // Efeito de hover suave
    ctaButton.addEventListener('mouseover', function() {
        this.style.transition = 'all 0.3s ease';
    });

    // Efeito de scroll suave para elementos (se necessário no futuro)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});