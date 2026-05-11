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

    // --- CORREÇÃO DEFINITIVA DO BOTÃO VOLTAR AO TOPO ---
    const btn = document.getElementById("back-to-top");

    if (btn) {
        // Escutamos o evento de scroll na janela
        window.addEventListener('scroll', function() {
            // Pegamos a distância do topo de 3 formas diferentes para garantir compatibilidade
            let top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

            if (top > 400) {
                btn.classList.add("visible");
            } else {
                btn.classList.remove("visible");
            }
        }, { passive: true }); // passive melhora a performance

        btn.onclick = function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }
});

        btn.onclick = function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }
});
