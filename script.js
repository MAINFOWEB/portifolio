// 1. Função das Partículas (Isolada para não travar o resto)
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
    }
}

// 2. Lógica Principal (Digitação, Botão e Menu)
document.addEventListener("DOMContentLoaded", function() {
    
    // --- Tenta carregar as partículas ---
    carregarParticulas();

    // --- Efeito de Digitação ---
    const elemento = document.getElementById("digitando");
    if (elemento) {
        const textoTotal = "eu sou Márcio Alexandre.";
        let index = 0;

        function digitar() {
            if (index < textoTotal.length) {
                // Se chegar no nome "Márcio", começa a escrever dentro de um span azul
                if (textoTotal.substring(index).startsWith("Márcio Alexandre")) {
                    elemento.innerHTML += `<span class="nome-colorido">Márcio Alexandre.</span>`;
                    return; // Finaliza aqui pois o nome é o final
                }
                
                elemento.innerHTML += textoTotal.charAt(index);
                index++;
                setTimeout(digitar, 100);
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
        menuToggle.onclick = () => navLinks.classList.toggle('active');
    }

    // --- Ano Atual ---
    const yearSpan = document.getElementById("year");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});
