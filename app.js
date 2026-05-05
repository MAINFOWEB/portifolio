/* CONFIGURAÇÃO DAS PARTÍCULAS */
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
    "detect_on": "canvas",
    "events": { "onhover": { "enable": true, "mode": "grab" }, "resize": true }
  },
  "retina_detect": true
});

/* LÓGICA DE INTERAÇÃO (DOM) */
document.addEventListener("DOMContentLoaded", function() {
   
    // 1. LÓGICA DO MENU MOBILE (O que faltava para o celular)
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            // Alterna a classe 'active' para abrir/fechar o menu
            navLinks.classList.toggle('active');
        });

        // Fecha o menu ao clicar em qualquer link (Melhor experiência no celular)
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // 2. LÓGICA DO BOTÃO BACK TO TOP
    const btn = document.getElementById("back-to-top"); 

    if (btn) { 
        window.onscroll = function() {
            // Usando scrollY que é o padrão mais moderno
            if (window.scrollY > 400) {
                btn.style.display = "flex";
            } else {
                btn.style.display = "none";
            }
        };

        btn.onclick = function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }
});
