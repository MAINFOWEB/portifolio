
console.log("JavaScript carregado com sucesso!");

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. ANO ATUAL
    const yearSpan = document.getElementById("year");
    if (yearSpan) yearSpan.textContent = "2026";

    // 2. MENU MOBILE (Simplificado)
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
        menuToggle.onclick = function() {
            navLinks.classList.toggle('active');
        };
    }

    // 3. BOTÃO VOLTAR AO TOPO (A Prova de Falhas)
    const btn = document.getElementById("back-to-top");

    if (btn) {
        window.onscroll = function() {
            // Log para você ver no console (F12) se o scroll está funcionando
            console.log("Posição do scroll:", window.pageYOffset);

            if (window.pageYOffset > 300) {
                btn.style.setProperty("display", "flex", "important");
                btn.style.opacity = "1";
                btn.style.visibility = "visible";
            } else {
                btn.style.setProperty("display", "none", "important");
                btn.style.opacity = "0";
                btn.style.visibility = "hidden";
            }
        };

        btn.onclick = function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    } else {
        console.log("Erro: Botão 'back-to-top' não foi encontrado no HTML!");
    }
});
