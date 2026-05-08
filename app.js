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
    
    // 1. LÓGICA DO MENU MOBILE (Controle do Hambúrguer)
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            // Alterna a classe 'active' definida no seu CSS para abrir/fechar o menu
            navLinks.classList.toggle('active');

            // --- ACRESCENTADO: Troca o ícone de Barras por um "X" quando aberto ---
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.replace('fa-bars', 'fa-times');
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        });

        // Fecha o menu ao clicar em qualquer link (Melhor experiência no celular)
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                // Retorna o ícone para Barras ao fechar
                const icon = menuToggle.querySelector('i');
                icon.classList.replace('fa-times', 'fa-bars');
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

    // 3. LÓGICA DO COPYRIGHT (Atualização Automática do Ano)
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
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

    // 3. LÓGICA DO COPYRIGHT (Atualização Automática do Ano)
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Nota: Removi a duplicata que estava fora deste bloco para evitar erros de referência, 
    // mantendo as funcionalidades centralizadas aqui dentro do DOMContentLoaded.
});
