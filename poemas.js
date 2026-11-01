/* =========================================================================
   NOSSOS POEMAS  ✍️❤️
   =========================================================================
   Para adicionar um poema, copie um bloco { ... } abaixo e preencha.
   Separe cada poema com uma vírgula.

   Campos:
   -------------------------------------------------------------------------
   titulo  (texto)  Título do poema.
   autor   (texto)  Quem escreveu (ex: "Gustavo", "Mimi", "Nós dois").
   data    (texto)  Data do poema, formato "AAAA-MM-DD". Deixe "" se não quiser.
   texto   (texto)  O poema em si. Use \n para pular linha, ou escreva entre
                    crases (`) em várias linhas — as quebras são preservadas.
   ========================================================================= */

const POEMAS = [

  {
    titulo: "Primeiro poema",
    autor: "Gustavo",
    data: "2026-08-15",
    texto: `(exemplo — troque pelo poema de verdade)

Aqui vão as palavras
que você quiser guardar,
uma linha embaixo da outra,
do jeitinho que escrever.`
  },

  {
    titulo: "Segundo poema",
    autor: "Mimi",
    data: "2026-09-10",
    texto: `(exemplo — troque pelo poema de verdade)

Cada verso é um pedaço
de um momento nosso,
e este cantinho guarda
tudo com carinho.`
  },

  {
    titulo: "Terceiro poema",
    autor: "Nós dois",
    data: "2026-10-30",
    texto: `(exemplo — troque pelo poema de verdade)

As melhores histórias
são as que vivemos juntos —
e as melhores palavras,
as que escrevemos a dois.`
  }

];

/* Não mexa nesta linha — ela disponibiliza os poemas pra página. */
if (typeof window !== "undefined") { window.POEMAS = POEMAS; }
