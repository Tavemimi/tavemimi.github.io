/* ============================================================
   CARREGADOR COM CACHE-BUSTING AUTOMÁTICO
   ------------------------------------------------------------
   Carrega os scripts de dados e de lógica SEMPRE na versão
   mais recente, sem precisar trocar número de versão na mão.

   Como usar na página (no final do <body>):
     <script src="../assets/js/loader.js"
             data-dados="../dados/filmes.js"
             data-app="../assets/js/app.js"></script>

   O loader adiciona um ?v=TIMESTAMP único a cada carregamento,
   então o navegador nunca serve uma versão antiga em cache.
   Carrega primeiro os dados, depois a lógica (nessa ordem).
   ============================================================ */
(function () {
  var atual = document.currentScript;
  if (!atual) return;

  var dados = atual.getAttribute("data-dados");
  var app = atual.getAttribute("data-app");
  var versao = Date.now(); // muda a cada carregamento -> sempre "fresco"

  function carregar(url) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      var sep = url.indexOf("?") === -1 ? "?" : "&";
      s.src = url + sep + "v=" + versao;
      s.onload = resolve;
      s.onerror = reject;
      document.body.appendChild(s);
    });
  }

  /* Carrega dados -> depois a lógica (a lógica depende dos dados) */
  var cadeia = Promise.resolve();
  if (dados) cadeia = cadeia.then(function () { return carregar(dados); });
  if (app) cadeia = cadeia.then(function () { return carregar(app); });
  cadeia.catch(function (e) {
    console.error("Falha ao carregar os scripts da página:", e);
  });
})();
