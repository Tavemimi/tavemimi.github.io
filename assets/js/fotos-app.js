/* ============================================================
   NOSSAS FOTOS — lógica da página
   ============================================================ */

const grade = document.getElementById("fotos-grade");
const elVazio = document.getElementById("fotos-vazio");
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lb-img");
const lbLegenda = document.getElementById("lb-legenda");
const lbFechar = document.getElementById("lb-fechar");

const fotos = Array.isArray(window.FOTOS) ? window.FOTOS.slice() : [];

/* Monta o caminho da imagem: link direto (http) passa igual;
   senão, prefixa a pasta fotos/ (relativa à pagina em paginas/). */
function caminhoFoto(foto) {
  const nome = foto.arquivo || foto.src || "";
  if (/^https?:\/\//i.test(nome)) return nome;
  if (nome.includes("/")) return nome; // já tem caminho
  return "../fotos/" + nome;
}

function formatarData(iso) {
  if (!iso) return "";
  const d = new Date(iso + "T00:00:00");
  if (isNaN(d)) return iso;
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
}

function esc(txt) {
  return String(txt ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function mostrarFallback(slot) {
  slot.innerHTML = `
    <div class="foto-fallback">
      <span class="emoji">📷</span>
      <span>foto não encontrada</span>
    </div>`;
}

function criarFoto(foto) {
  const card = document.createElement("button");
  card.className = "foto-card";
  card.type = "button";
  const legenda = foto.legenda || "";
  const meta = [formatarData(foto.data), foto.local].filter(Boolean).join(" • ");
  card.setAttribute("aria-label", legenda || "Foto. Toque para ampliar.");

  card.innerHTML = `
    <div class="foto-slot"></div>
    <div class="foto-info">
      ${legenda ? `<p class="foto-legenda">${esc(legenda)}</p>` : ""}
      ${meta ? `<p class="foto-meta">${esc(meta)}</p>` : ""}
    </div>
  `;

  /* Carrega a imagem (com fallback se faltar) */
  const slot = card.querySelector(".foto-slot");
  mostrarFallback(slot);
  const url = caminhoFoto(foto);
  if (url) {
    const img = document.createElement("img");
    img.alt = legenda || "Nossa foto";
    img.decoding = "async";
    img.addEventListener("load", () => { slot.innerHTML = ""; slot.appendChild(img); });
    img.src = url;
    if (img.complete && img.naturalWidth > 0) { slot.innerHTML = ""; slot.appendChild(img); }
  }

  /* Clique/toque abre em tela cheia */
  card.addEventListener("click", () => abrirLightbox(foto));

  return card;
}

function abrirLightbox(foto) {
  lbImg.src = caminhoFoto(foto);
  lbImg.alt = foto.legenda || "Nossa foto";
  const meta = [formatarData(foto.data), foto.local].filter(Boolean).join(" • ");
  lbLegenda.innerHTML = `${esc(foto.legenda || "")}${meta ? `<span class="lb-meta">${esc(meta)}</span>` : ""}`;
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
  lbFechar.focus();
}

function fecharLightbox() {
  lightbox.hidden = true;
  lbImg.src = "";
  document.body.style.overflow = "";
}

/* Eventos do lightbox */
lbFechar.addEventListener("click", fecharLightbox);
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) fecharLightbox(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !lightbox.hidden) fecharLightbox(); });

/* Ordena da mais recente pra mais antiga */
fotos.sort((a, b) => (b.data || "").localeCompare(a.data || ""));

grade.innerHTML = "";
fotos.forEach((f) => grade.appendChild(criarFoto(f)));
if (elVazio) elVazio.hidden = fotos.length !== 0;
