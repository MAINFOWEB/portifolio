// 1. Inicialização das Partículas
if (typeof particlesJS !== 'undefined') {
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#ffffff" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5, "random": false },
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
            "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }
        },
        "retina_detect": true
    });
}

document.addEventListener("DOMContentLoaded", function() {
    
    // 2. Efeito de Digitação (Olá, eu sou Márcio Alexandre)
    const elemento = document.getElementById("digitando");
    const parteBranca = "eu sou ";
    const parteAzul = "Márcio Alexandre";
    let i = 0;
    let j = 0;
    const velocidade = 100;

    function digitar() {
        if (i < parteBranca.length) {
            elemento.innerHTML += parteBranca.charAt(i);
            i++;
            setTimeout(digitar, velocidade);
        } else if (j < parteAzul.length) {
            if (j === 0) {
                elemento.innerHTML += '<span class="nome-colorido"></span>';
            }
            const spanNome = elemento.querySelector(".nome-colorido");
            spanNome.innerHTML += parteAzul.charAt(j);
            j++;
            setTimeout(digitar, velocidade);
        }
    }
    if (elemento) digitar();

    // 3. Botão Voltar ao Topo
    const btnScroll = document.getElementById("scrollToTopBtn");
    window.onscroll = function() {
        if (window.scrollY > 400 || document.documentElement.scrollTop > 400) {
            btnScroll.style.display = "flex";
        } else {
            btnScroll.style.display = "none";
        }
    };
    btnScroll.onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // 4. Menu Mobile
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle) {
        menuToggle.onclick = () => {
            navLinks.classList.toggle('active');
        };
    }

    // 5. Ano Atual no Footer
    const yearSpan = document.getElementById("year");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});
