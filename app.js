/* Configuração do Particles.js */
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

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. MENU MOBILE
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // 2. BOTÃO VOLTAR AO TOPO
    const btn = document.getElementById("back-to-top"); 

    window.onscroll = function() {
        if (window.scrollY > 400) {
            btn.style.display = "flex";
        } else {
            btn.style.display = "none";
        }
    };

    btn.onclick = function(evento) {
        evento.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // 3. ANO ATUAL (Sempre será 2026 conforme solicitado no footer)
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = "2026";
    }
});
