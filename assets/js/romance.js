/* ============================================================
   ✨ Corações flutuantes de fundo ✨
   Cria vários coraçõezinhos subindo pela tela, em posições,
   tamanhos e velocidades aleatórias. Puramente decorativo.
   ============================================================ */
(function () {
  /* Respeita quem prefere menos movimento */
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  var EMOJIS = ["❤️", "💕", "💖", "💗", "💓", "🩷", "✨"];
  var QUANTIDADE = 14;

  var camada = document.createElement("div");
  camada.className = "coracoes";
  camada.setAttribute("aria-hidden", "true");

  function aleatorio(min, max) { return Math.random() * (max - min) + min; }

  for (var i = 0; i < QUANTIDADE; i++) {
    var c = document.createElement("span");
    c.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
    c.style.left = aleatorio(0, 100) + "vw";
    c.style.fontSize = aleatorio(0.9, 2.2) + "rem";
    c.style.animationDuration = aleatorio(9, 20) + "s";
    c.style.animationDelay = aleatorio(0, 12) + "s";
    camada.appendChild(c);
  }

  /* Insere a camada assim que o body estiver pronto */
  if (document.body) {
    document.body.insertBefore(camada, document.body.firstChild);
  } else {
    document.addEventListener("DOMContentLoaded", function () {
      document.body.insertBefore(camada, document.body.firstChild);
    });
  }
})();
