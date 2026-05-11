// 1. Configuração do Particles.js
try {
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#ffffff" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5 },
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
            "move": { "enable": true, "speed": 2 }
        },
        "interactivity": {
            "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" } }
        },
        "retina_detect": true
    });
} catch (e) {
    console.log("Erro no Particles:", e);
}

// 2. Funções do Portfólio
document.addEventListener("DOMContentLoaded", function() {
    
    // Ano Atual
    const yearSpan = document.getElementById("year");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // Menu Mobile
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
        menuToggle.onclick = () => navLinks.classList.toggle('active');
        navLinks.querySelectorAll('a').forEach(link => {
            link.onclick = () => navLinks.classList.remove('active');
        });
    }

    // --- CORREÇÃO DO BOTÃO VOLTAR AO TOPO (ESTILO CLASSE) ---
    const btn = document.getElementById("back-to-top");

    if (btn) {
        // Usamos addEventListener para não conflitar com nada
        window.addEventListener('scroll', function() {
            if (window.scrollY > 400 || document.documentElement.scrollTop > 400) {
                btn.classList.add("visible"); // Adiciona a classe para mostrar
            } else {
                btn.classList.remove("visible"); // Remove a classe para esconder
            }
        });

        btn.onclick = function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }
});
