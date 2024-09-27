document.querySelectorAll('article').forEach(article => {
    article.addEventListener('click', function(event) {
        // Previne o comportamento padrão do link
        event.preventDefault();
        
        // Adiciona a animação
        this.style.transition = 'transform 1s ease, opacity 1s ease';
        this.style.transform = 'scale(5)';
        this.style.opacity = '0';
        
        // Redireciona para o link após a animação
        setTimeout(() => {
            window.location.href = this.querySelector('a').href;
        }, 800); // O tempo deve ser igual ao tempo da animação em CSS
    });
});
