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
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });

        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    const btn = document.getElementById("back-to-top"); 
    if (btn) { 
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
    }

    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
    // 1. LÓGICA DO MENU MOBILE (Controle do Hambúrguer)
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            // Alterna a classe 'active' definida no seu CSS para abrir/fechar o menu
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

    // 2. LÓGICA DO BOTÃO VOLTAR AO TOPO (BACK TO TOP)
    const btn = document.getElementById("back-to-top"); 

    if (btn) { 
        window.onscroll = function() {
            // Define a visibilidade do botão baseada no scroll vertical
            if (window.scrollY > 400) {
                btn.style.display = "flex";
            } else {
                btn.style.display = "none";
            }
        };

        // Scroll suave para o topo ao clicar no botão
        btn.onclick = function(evento) {
            evento.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }
});
