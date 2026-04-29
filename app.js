/* particlesJS.load('dom-id', params); */
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100, /* Aumentei para garantir visibilidade */
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff" /* COR DAS PARTÍCULAS: BRANCO */
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
    },
    "opacity": {
      "value": 0.7, /* Um pouco mais opaco */
      "random": false,
    },
    "size": {
      "value": 3,
      "random": true,
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff", /* COR DAS CONEXÕES: BRANCO */
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "resize": true
    },
  },
  "retina_detect": true
});