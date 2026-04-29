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

/* LÓGICA DO BOTÃO BACK TO TOP */
document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("backToTop");

    window.onscroll = function() {
        if (window.pageYOffset > 400) {
            btn.style.display = "flex";
        } else {
            btn.style.display = "none";
        }
    };

    btn.onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
});
