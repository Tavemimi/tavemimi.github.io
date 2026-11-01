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
   texto   (texto)  O poema em si. Escreva entre crases (`) em várias linhas —
                    as quebras de linha são preservadas no site.
   ========================================================================= */

const POEMAS = [

  {
    titulo: "P.Y",
    autor: "Gustavo \u201CTavera\u201D Vianna",
    data: "",
    texto: `Eu me perdi no caminho e deixei me levar,
Cheguei exatamente onde queria estar,
Um palco para cantar, uma história para contar,
E essa é de quando as nossas partes vieram se encontrar.

Um olhar que vale por cem palavras,
Uma voz que não se deixa silenciar,
Um sentimento que não vai parar,
E faltaria papel para tudo te relatar.

Deixa eu me entorpecer de você,
Escutar, carregar a capa do seu celular,
Não preciso ser melhor que ninguém para vencer,
Somente ser o melhor para te agradar,
Que no fim sejamos o repouso e o caminho a trilhar.

Você só quer alguém que te ame de verdade,
Mesmo longe de casa, eu te espero voltar,
Sou bobo e problemático, mas com sinceridade,
No fim te carregaria para a estrada não machucar.

A calmaria e o indomável,
O cavalo e o caranguejo,
Posso ser um idiota incurável,
Mas faria de tudo pelo seu beijo.

A cada dia, olhando em seus olhos assim,
Perguntando o que você vai querer de mim,
Para eu não esquecer de como você se sente,
E para que a nossa estrofe siga em frente.

Tudo isso é fruto de uma afeição,
Que tantas vezes eu pedi para esquecer,
Acho que ainda bate a preocupação,
Mas sinto que disso não vou me arrepender.

E aos poucos eu te conheci,
O que nem no fundo de uma garrafa iria achar,
Viajando para bem longe daqui,
Sentindo que ao seu lado eu posso voar.

A gente é tipo um filme do Adam Sandler,
Quero seu sorriso sem motivo e sem porquê,
Somos uma combinação difícil de resolver,
Que computador nenhum conseguiria prever.

Um plano que até o Cebolinha se orgulharia,
Nós dois unidos contra um mundo tão louco,
Pensando em te dar muito mais do que eu podia,
Quando eu vencer, te levo para ver o topo.

Quero ficar contigo até o dia amanhecer,
Perdendo a respiração, sentindo a pele ferver,
De todas as formas ver você, minha dançarina,
Vestida de vermelho, a oitava maravilha divina.

No fim, deixamos um pouco de nós nos outros,
Mas espero que com você eu encontre o meu lugar,
Orgulho não vai nos levar a lugar nenhum,
E se for para ser egoísta, é você que eu quero levar.

Para cada estrela te fazer lembrar,
E eternamente de minha te chamar,
Sendo responsável pelo que te cativa,
Mostre o seu lado perigoso, que é o que me motiva.

Para te provar o meu amor em cada traço,
Demorando de dez a mais de mil anos,
Ficaria com lírios guardando o meu abraço,
Em menos de semanas te incluindo nos meus planos.

Sendo aquilo que eu melhor compreendo,
E se ao encarar o abismo a valer,
Eu sinta o medo e acabe me perdendo,
Espero que ao piscar os olhos,
Eu sempre encontre você.

Eternizando todas as declarações,
Multiplicando as nossas canções,
Ignorando muros e te chamando em outras línguas: “minha paz”.

Eu queria me estender, mas por hora se contente,
Te escrevo muito mais em uma parte dois que faremos depois,
Após explorar vários lugares como “a gente”,
E dizer um “eu te amo” que seja só de nós dois.`
  },

  {
    titulo: "Rostos da Lua",
    autor: "Yasmim Carmem",
    data: "",
    texto: `Da janela sinto o coração pulsar
Dando vista a bela luz do luar
Ilumine o caminho daquela terra distante
Onde meu amor se encontra, longe e radiante

Lua Crescente, minha doce confidente,
Por quê sinto que estou mais sorridente?
Seria ele o culpado por iluminar minha escuridão,
Ou eu decidi ouvir o silêncio da razão?

Oh Lua Cheia, como ele está?
Seria eu ainda capaz de amar?
Desejo tanto ter sua visão aí do alto
Para encontrar meu amor e abraçá-lo num salto

Lua Minguante, não se vá ainda..
Eu escutei da penumbra uma voz linda
Me contou verdades difíceis de acreditar...
Disse que vou amá-lo, deveria me preocupar?

Oh Lua Nova, consegue vê-lo?
As estrelas acenderam um terrível desejo
Por que quero encontrar algo que não me falta?
Mas me faz sentir segura, feliz e calma

Da janela sinto o coração pulsar
A lua, outra vez, me chama para olhar
De todos os caminhos da noite existentes
Eu escolho o seu, Mineiro, da lua um presente.`
  }

];

/* Não mexa nesta linha — ela disponibiliza os poemas pra página. */
if (typeof window !== "undefined") { window.POEMAS = POEMAS; }
