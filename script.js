
// 1. Função das Partículas
function carregarParticulas() {
    if (typeof particlesJS !== 'undefined') {
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
            "interactivity": { "events": { "onhover": { "enable": true, "mode": "grab" } } },
            "retina_detect": true
        });
        console.log("Partículas carregadas com sucesso!");
    }
}

// 2. Lógica de Interface (Digitação, Botão e Menu)
document.addEventListener("DOMContentLoaded", function() {
    
    // Inicia Partículas
    carregarParticulas();

    // --- Efeito de Digitação ---
    const elemento = document.getElementById("digitando");
    if (elemento) {
        const parteBranca = "eu sou ";
        const parteAzul = "Márcio Alexandre.";
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
                if (spanNome) {
                    spanNome.innerHTML += parteAzul.charAt(j);
                    j++;
                    setTimeout(digitar, velocidade);
                }
            }
        }
        digitar();
    }

    // --- Botão Voltar ao Topo ---
    const btnScroll = document.getElementById("scrollToTopBtn");
    if (btnScroll) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 400) {
                btnScroll.style.display = "flex";
            } else {
                btnScroll.style.display = "none";
            }
        });
        btnScroll.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // --- Menu Mobile ---
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
        menuToggle.onclick = () => {
            navLinks.classList.toggle('active');
        };
    }

    // --- Ano Atual ---
    const yearSpan = document.getElementById("year");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});
