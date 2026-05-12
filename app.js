// 1. Configuração das Partículas (Fundo)
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
    }

    // LÓGICA DO BOTÃO (ID: scrollToTopBtn)
    const btn = document.getElementById("scrollToTopBtn");

    if (btn) {
        window.addEventListener('scroll', function() {
            // Posição do scroll
            let scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

            if (scrollPos > 400) {
    btn.style.display = "block"; // mostra
} else {
    btn.style.display = "none";  // esconde
            }
        });

        // Clique para subir
        btn.onclick = function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const elemento = document.getElementById("digitando");
    const parteBranca = "lá, eu sou ";
    const parteAzul = "Márcio Alexandre";
    
    let i = 0;
    let j = 0;
    const velocidade = 100;

    function digitar() {
        // 1. Digita "eu sou " (vai herdar a cor branca do h1)
        if (i < parteBranca.length) {
            elemento.innerHTML += parteBranca.charAt(i);
            i++;
            setTimeout(digitar, velocidade);
        } 
        // 2. Digita o nome (que o seu CSS já deixa azul automaticamente)
        else if (j < parteAzul.length) {
            // Se for a primeira letra do nome, cria um span interno
            // Isso garante que apenas o nome fique azul conforme o seu CSS
            if (j === 0) {
                elemento.innerHTML += '<span class="nome-colorido"></span>';
            }
            
            const spanNome = elemento.querySelector(".nome-colorido");
            spanNome.innerHTML += parteAzul.charAt(j);
            j++;
            setTimeout(digitar, velocidade);
        }
    }

    digitar();
});
