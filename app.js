/* ============================================================
   NOSSO ACERVO DE FILMES — lógica da página
   ============================================================ */

/* -------------------------------------------------------------
   CHAVE DA API DE PÔSTERES (OMDb)
   -------------------------------------------------------------
   Busca os pôsteres automaticamente pelo título do filme.
   Para trocar a chave, é só alterar o texto abaixo.
   Pegue uma chave gratuita em: https://www.omdbapi.com/apikey.aspx
   ------------------------------------------------------------- */
const OMDB_API_KEY = "12e8652b";

/* Elementos da página */
const grade = document.getElementById("grade");
const campoBusca = document.getElementById("busca");
const campoOrdenar = document.getElementById("ordenar");
const elStats = document.getElementById("stats");
const elVazio = document.getElementById("vazio");

/* Lista de filmes vinda de filmes.js */
const filmes = Array.isArray(window.FILMES) ? window.FILMES.slice() : [];

/* Cache de pôsteres já buscados nesta sessão (evita repetir chamadas) */
const cachePoster = new Map();

/* ------------------------------------------------------------------
   Busca de pôster na OMDb (só quando o filme não tem posterUrl manual)
   ------------------------------------------------------------------ */
async function buscarPoster(filme) {
  if (!OMDB_API_KEY) return null;

  /* Chave de cache e parâmetros:
     - se o filme tem imdbId, busca por ID (mais preciso)
     - senão, busca por título (em inglês/original quando houver) */
  const params = new URLSearchParams({ apikey: OMDB_API_KEY });
  let chave;
  if (filme.imdbId) {
    params.set("i", filme.imdbId);
    chave = `id:${filme.imdbId}`;
  } else {
    const termo = filme.tituloBusca || filme.titulo;
    params.set("t", termo);
    if (filme.ano) params.set("y", String(filme.ano));
    chave = `${termo}|${filme.ano || ""}`;
  }
  if (cachePoster.has(chave)) return cachePoster.get(chave);

  try {
    const resp = await fetch(`https://www.omdbapi.com/?${params.toString()}`);
    const dados = await resp.json();
    const poster = dados && dados.Poster && dados.Poster !== "N/A"
      ? dados.Poster
      : null;
    cachePoster.set(chave, poster);
    return poster;
  } catch (e) {
    console.warn("Não consegui buscar o pôster de", termo, e);
    cachePoster.set(chave, null);
    return null;
  }
}

/* ------------------------------------------------------------------
   Utilidades
   ------------------------------------------------------------------ */

/* Formata "2026-02-14" -> "14 de fev de 2026" */
function formatarData(iso) {
  if (!iso) return "";
  const d = new Date(iso + "T00:00:00");
  if (isNaN(d)) return iso;
  return d.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

/* Monta as estrelinhas (cheias, meia e vazias) a partir da nota 0-5 */
function estrelas(nota) {
  const n = Math.max(0, Math.min(5, Number(nota) || 0));
  const cheias = Math.floor(n);
  const meia = n - cheias >= 0.5;
  const vazias = 5 - cheias - (meia ? 1 : 0);
  let out = "★".repeat(cheias);
  if (meia) out += "⯪"; // meia estrela
  const vaziasSpan = vazias > 0
    ? `<span class="vazia">${"★".repeat(vazias)}</span>`
    : "";
  return `<span class="estrelas" title="${n} de 5">${out}${vaziasSpan}</span>`;
}

/* Escapa texto pra evitar quebra de HTML ao injetar conteúdo */
function esc(txt) {
  return String(txt ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* ------------------------------------------------------------------
   Criação de um card
   ------------------------------------------------------------------ */
function criarCard(filme) {
  const card = document.createElement("button");
  card.className = "card";
  card.type = "button";
  card.setAttribute("aria-label", `${filme.titulo}. Toque para ver detalhes.`);

  const piadasHTML = Array.isArray(filme.piadas) && filme.piadas.length
    ? `<p class="piadas-titulo">Nossas piadinhas</p>
       <ul>${filme.piadas.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>`
    : `<p class="sinopse"><em>Ainda sem piadinhas pra esse. 😌</em></p>`;

  card.innerHTML = `
    <div class="card-interno">
      <div class="face frente">
        <div class="poster-slot"></div>
        <span class="dica-virar">toque ↻</span>
        <div class="legenda">
          <div class="t">${esc(filme.titulo)}</div>
          <div class="a">${filme.ano ? esc(filme.ano) : ""}</div>
        </div>
      </div>
      <div class="face verso">
        <h3>${esc(filme.titulo)}</h3>
        <div class="meta">
          ${estrelas(filme.nota)}
          <span>${formatarData(filme.data)}</span>
        </div>
        <p class="sinopse">${esc(filme.sinopse) || "Sem sinopse."}</p>
        ${piadasHTML}
      </div>
    </div>
  `;

  /* Vira o card no clique/toque */
  card.addEventListener("click", () => {
    card.classList.toggle("virado");
  });

  /* Preenche o pôster:
     - se o filme tem posterUrl, usa essa imagem (manual tem prioridade)
     - senão, busca automaticamente na OMDb pelo título */
  const slot = card.querySelector(".poster-slot");
  const definirImagem = (url) => {
    const img = new Image();
    img.alt = `Pôster de ${filme.titulo}`;
    img.loading = "lazy";
    img.onload = () => { slot.innerHTML = ""; slot.appendChild(img); };
    img.onerror = () => mostrarFallback(slot, filme.titulo);
    img.src = url;
  };

  if (filme.posterUrl) {
    definirImagem(filme.posterUrl);
  } else {
    buscarPoster(filme).then((url) => {
      if (url) definirImagem(url);
      else mostrarFallback(slot, filme.titulo);
    });
  }

  return card;
}

function mostrarFallback(slot, titulo) {
  slot.innerHTML = `
    <div class="poster-fallback">
      <span class="emoji">🍿</span>
      <span class="nome">${esc(titulo)}</span>
      <span>sem pôster</span>
    </div>`;
}

/* ------------------------------------------------------------------
   Filtro + ordenação + render
   ------------------------------------------------------------------ */
function aplicar() {
  const termo = campoBusca.value.trim().toLowerCase();
  const modo = campoOrdenar.value;

  let lista = filmes.filter((f) => {
    if (!termo) return true;
    const alvo = [
      f.titulo,
      f.sinopse,
      ...(Array.isArray(f.piadas) ? f.piadas : []),
    ].join(" ").toLowerCase();
    return alvo.includes(termo);
  });

  lista.sort((a, b) => {
    switch (modo) {
      case "data-asc":  return (a.data || "").localeCompare(b.data || "");
      case "data-desc": return (b.data || "").localeCompare(a.data || "");
      case "nota-desc": return (Number(b.nota) || 0) - (Number(a.nota) || 0);
      case "titulo-asc": return (a.titulo || "").localeCompare(b.titulo || "", "pt-BR");
      default: return 0;
    }
  });

  grade.innerHTML = "";
  lista.forEach((f) => grade.appendChild(criarCard(f)));

  elVazio.hidden = lista.length !== 0;
  elStats.textContent = montarStats(lista.length);
}

function montarStats(qtdVisivel) {
  const total = filmes.length;
  if (total === 0) return "Nenhum filme ainda — adicione no arquivo filmes.js 📝";
  const plural = total === 1 ? "filme" : "filmes";
  if (qtdVisivel === total) return `${total} ${plural} no nosso acervo 🍿`;
  return `Mostrando ${qtdVisivel} de ${total} ${plural}`;
}

/* ------------------------------------------------------------------
   Eventos + início
   ------------------------------------------------------------------ */
campoBusca.addEventListener("input", aplicar);
campoOrdenar.addEventListener("change", aplicar);

aplicar();
