/* ============================================================
   NOSSOS POEMAS — lógica da página
   ============================================================ */

const lista = document.getElementById("poemas-lista");
const elVazio = document.getElementById("poemas-vazio");

const poemas = Array.isArray(window.POEMAS) ? window.POEMAS.slice() : [];

/* Formata "2026-08-15" -> "15 de ago de 2026" */
function formatarData(iso) {
  if (!iso) return "";
  const d = new Date(iso + "T00:00:00");
  if (isNaN(d)) return iso;
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
}

/* Escapa texto pra evitar injeção de HTML */
function esc(txt) {
  return String(txt ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function criarPoema(p) {
  const art = document.createElement("article");
  art.className = "poema";

  const meta = [p.autor ? "por " + esc(p.autor) : "", formatarData(p.data)]
    .filter(Boolean)
    .join(" • ");

  art.innerHTML = `
    <h2>${esc(p.titulo) || "Sem título"}</h2>
    ${meta ? `<p class="poema-meta">${meta}</p>` : ""}
    <div class="corpo">${esc(p.texto)}</div>
    ${p.autor ? `<p class="assinatura">— ${esc(p.autor)}</p>` : ""}
  `;
  return art;
}

/* Ordena do mais recente pro mais antigo */
poemas.sort((a, b) => (b.data || "").localeCompare(a.data || ""));

lista.innerHTML = "";
poemas.forEach((p) => lista.appendChild(criarPoema(p)));

if (elVazio) elVazio.hidden = poemas.length !== 0;
