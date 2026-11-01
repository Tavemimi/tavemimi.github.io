/* =========================================================================
   NOSSAS FOTOS  📸❤️
   =========================================================================
   Para adicionar uma foto:
   1. Salve a imagem na pasta fotos/ (nome simples, sem espaços nem acentos,
      ex: praia-2026.jpg).
   2. Copie um bloco { ... } abaixo e preencha. Separe com vírgula.

   Campos:
   -------------------------------------------------------------------------
   arquivo  (texto)  Só o NOME do arquivo que você salvou na pasta fotos/
                     (ex: "praia-2026.jpg"). Não precisa escrever o caminho.
                     Se for uma imagem da internet, cole o link https:// inteiro.
   legenda  (texto)  Uma legenda/lembrança da foto.
   data     (texto)  Data da foto, formato "AAAA-MM-DD". Deixe "" se não quiser.
   local    (texto)  OPCIONAL. Onde foi (ex: "Praia de Copacabana").
   ========================================================================= */

const FOTOS = [

  {
    arquivo: "exemplo-1.jpg",
    legenda: "(exemplo) Troque pela legenda da nossa foto.",
    data: "2026-08-15",
    local: ""
  },

  {
    arquivo: "exemplo-2.jpg",
    legenda: "(exemplo) Troque pela legenda da nossa foto.",
    data: "2026-09-10",
    local: ""
  },

  {
    arquivo: "exemplo-3.jpg",
    legenda: "(exemplo) Troque pela legenda da nossa foto.",
    data: "2026-10-30",
    local: ""
  }

];

/* Não mexa nesta linha — ela disponibiliza as fotos pra página. */
if (typeof window !== "undefined") { window.FOTOS = FOTOS; }
