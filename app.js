// 1. Inicialização do Particles.js
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
            "events": { "onhover": { "enable": true, "mode": "grab" } }
        },
        "retina_detect": true
    });
} catch (e) { console.log("Erro partículas:", e); }

document.addEventListener("DOMContentLoaded", function() {
    
    // Ano Atual
    const yearSpan = document.getElementById("year");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // Menu Mobile
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
        menuToggle.onclick = () => navLinks.classList.toggle('active');
    }

    // BOTÃO VOLTAR AO TOPO (CORREÇÃO FINAL)
    const btn = document.getElementById("back-to-top");

    if (btn) {
        window.addEventListener('scroll', function() {
            // Pegamos o scroll de qualquer navegador
            let scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

            if (scrollPos > 400) {
                btn.classList.add("visible");
            } else {
                btn.classList.remove("visible");
            }
        });

        btn.onclick = function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }
});
