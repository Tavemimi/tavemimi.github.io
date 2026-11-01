/* =========================================================================
   NOSSO ACERVO DE FILMES  🎬❤️
   =========================================================================
   Para adicionar um filme, copie um bloco { ... } abaixo e preencha.
   Separe cada filme com uma vírgula.

   Campos:
   -------------------------------------------------------------------------
   titulo      (texto)  Nome do filme (em português, como vocês chamam).
   tituloBusca (texto)  OPCIONAL. Nome em inglês/original do filme. A busca
                        automática de pôster (OMDb) funciona melhor com o
                        título original. Se deixar "", ela usa o "titulo".
   imdbId      (texto)  OPCIONAL. Código do filme no IMDb (ex: "tt0910970").
                        Use quando a busca por título trouxer o filme errado:
                        por ID o pôster vem sempre certinho. Você acha o código
                        na URL da página do filme no site imdb.com.
                        Quando preenchido, tem prioridade sobre o tituloBusca.
   ano         (número) Ano de lançamento. Ajuda a achar o pôster certo.
   posterUrl   (texto)  OPCIONAL. Caminho de uma imagem na pasta img/
                        (ex: "img/wall-e.jpg") OU um link direto.
                        Se preenchido, essa imagem tem PRIORIDADE sobre a
                        busca automática. Deixe "" para o site buscar sozinho.
   data        (texto)  Data em que assistiram juntos. Formato "AAAA-MM-DD".
                        Deixe "" se ainda não quiser preencher.
   nota        (número) Avaliação de 0 a 5 (aceita meio: 3.5, 4.5, etc.).
                        Deixe 0 enquanto não avaliarem.
   sinopse     (texto)  Uma sinopse curta do filme.
   piadas      (lista)  Piadinhas / lembranças internas de vocês.
                        Deixe [] (vazio) enquanto não tiverem piadinhas.
   ========================================================================= */

const FILMES = [

  {
    titulo: "Carros",
    tituloBusca: "Cars",
    ano: 2006,
    posterUrl: "",
    data: "",
    nota: 0,
    sinopse: "Um carro de corrida arrogante se perde na cidadezinha de Radiator Springs e aprende que amizade vale mais que troféus.",
    piadas: []
  },

  {
    titulo: "Carros 2",
    tituloBusca: "Cars 2",
    ano: 2011,
    posterUrl: "",
    data: "",
    nota: 0,
    sinopse: "Relâmpago McQueen e o Mate vão parar no meio de uma trama de espionagem internacional durante uma corrida mundial.",
    piadas: []
  },

  {
    titulo: "WALL-E",
    tituloBusca: "WALL-E",
    imdbId: "tt0910970",
    ano: 2008,
    posterUrl: "",
    data: "",
    nota: 0,
    sinopse: "Um robozinho que limpa a Terra abandonada se apaixona por outra robô e acaba embarcando numa aventura que pode salvar a humanidade.",
    piadas: []
  },

  {
    titulo: "Elementos",
    tituloBusca: "Elemental",
    ano: 2023,
    posterUrl: "",
    data: "",
    nota: 0,
    sinopse: "Numa cidade onde fogo, água, terra e ar convivem, uma jovem de fogo e um rapaz de água descobrem o quanto têm em comum.",
    piadas: []
  },

  {
    titulo: "Zootopia 2",
    tituloBusca: "Zootopia 2",
    ano: 2025,
    posterUrl: "",
    data: "",
    nota: 0,
    sinopse: "A coelha Judy e a raposa Nick voltam à ativa com um novo mistério para desvendar na metrópole dos animais. (Confira a sinopse oficial quando sair.)",
    piadas: []
  },

  {
    titulo: "Cara de Um, Focinho do Outro",
    tituloBusca: "Strays",
    ano: 2023,
    posterUrl: "",
    data: "",
    nota: 0,
    sinopse: "Um homem e seu cachorro acordam um dia com as mentes trocadas e precisam lidar com a vida um do outro.",
    piadas: []
  },

  {
    titulo: "Cavaleiro da Lua",
    tituloBusca: "Moon Knight",
    ano: 2022,
    posterUrl: "",
    data: "",
    nota: 0,
    sinopse: "Um homem com transtorno dissociativo descobre que compartilha o corpo com um justiceiro ligado a um deus egípcio.",
    piadas: []
  },

  {
    titulo: "Meu Malvado Favorito",
    tituloBusca: "Despicable Me",
    ano: 2010,
    posterUrl: "",
    data: "",
    nota: 0,
    sinopse: "Um vilão genial planeja roubar a Lua, mas tem seus planos bagunçados ao adotar três meninas órfãs.",
    piadas: []
  },

  {
    titulo: "Tá Dando Onda",
    tituloBusca: "Surf's Up",
    ano: 2007,
    posterUrl: "",
    data: "",
    nota: 0,
    sinopse: "Um documentário cômico acompanha pinguins surfistas numa competição mundial de surfe.",
    piadas: []
  },

  {
    titulo: "Wonka",
    tituloBusca: "Wonka",
    ano: 2023,
    posterUrl: "",
    data: "",
    nota: 0,
    sinopse: "A história de como o jovem e sonhador Willy Wonka se tornou o maior chocolateiro do mundo.",
    piadas: []
  },

  {
    titulo: "Esquadrão Suicida",
    tituloBusca: "The Suicide Squad",
    ano: 2021,
    posterUrl: "",
    data: "",
    nota: 0,
    sinopse: "Um grupo de vilões presos recebe uma missão quase impossível numa ilha remota em troca da liberdade.",
    piadas: []
  },

  {
    titulo: "A Noiva Cadáver",
    tituloBusca: "Corpse Bride",
    ano: 2005,
    posterUrl: "",
    data: "",
    nota: 0,
    sinopse: "Um rapaz tímido ensaia os votos na floresta e acaba casado por engano com uma noiva do mundo dos mortos.",
    piadas: []
  },

  {
    titulo: "Arcane",
    tituloBusca: "Arcane",
    ano: 2021,
    posterUrl: "",
    data: "",
    nota: 0,
    sinopse: "Duas irmãs se veem em lados opostos de um conflito entre duas cidades, em meio à ascensão de tecnologia e magia. (É série, mas entrou no acervo.)",
    piadas: []
  },

  {
    titulo: "A Nova Onda do Imperador",
    tituloBusca: "The Emperor's New Groove",
    ano: 2000,
    posterUrl: "",
    data: "",
    nota: 0,
    sinopse: "Um imperador mimado é transformado em lhama e precisa da ajuda de um camponês de bom coração para recuperar o trono.",
    piadas: []
  },

  {
    titulo: "A Nova Onda do Kronk",
    tituloBusca: "Kronk's New Groove",
    ano: 2005,
    posterUrl: "",
    data: "",
    nota: 0,
    sinopse: "O desastrado Kronk tenta provar ao pai que fez algo da vida, aprontando muita confusão pelo caminho.",
    piadas: []
  },

  {
    titulo: "Toy Story 5",
    tituloBusca: "Toy Story 5",
    ano: 2026,
    posterUrl: "",
    data: "",
    nota: 0,
    sinopse: "Mais uma aventura dos brinquedos mais queridos do cinema. (Confira a sinopse oficial quando sair.)",
    piadas: []
  },

  {
    titulo: "Invocação do Mal 3",
    tituloBusca: "The Conjuring: The Devil Made Me Do It",
    ano: 2021,
    posterUrl: "",
    data: "",
    nota: 0,
    sinopse: "Os investigadores Ed e Lorraine Warren enfrentam um caso real em que um acusado de assassinato alega ter sido possuído.",
    piadas: []
  },

  {
    titulo: "Invocação do Mal 4",
    tituloBusca: "The Conjuring: Last Rites",
    ano: 2025,
    posterUrl: "",
    data: "",
    nota: 0,
    sinopse: "O capítulo final da saga dos Warren os coloca diante de seu caso mais assustador. (Confira a sinopse oficial.)",
    piadas: []
  },

  {
    titulo: "Possuída no Deserto",
    tituloBusca: "",
    ano: 2024,
    posterUrl: "",
    data: "",
    nota: 0,
    sinopse: "Um terror sobrenatural ambientado em meio ao isolamento do deserto. (Confirme qual é este filme e ajuste título/ano/sinopse.)",
    piadas: []
  },

  {
    titulo: "O Nascimento do Mal",
    tituloBusca: "",
    ano: 2023,
    posterUrl: "",
    data: "",
    nota: 0,
    sinopse: "Uma história de horror sobre a origem de uma força maligna. (Existe mais de um filme com este nome — confirme qual é.)",
    piadas: []
  },

  {
    titulo: "A Era do Gelo",
    tituloBusca: "Ice Age",
    ano: 2002,
    posterUrl: "",
    data: "",
    nota: 0,
    sinopse: "Um mamute, uma preguiça e um tigre-dentes-de-sabre se unem para devolver um bebê humano à sua família durante a era glacial.",
    piadas: []
  },

  {
    titulo: "A Era do Gelo 2",
    tituloBusca: "Ice Age: The Meltdown",
    ano: 2006,
    posterUrl: "",
    data: "",
    nota: 0,
    sinopse: "O degelo ameaça o vale e a turma precisa migrar antes que tudo vire água, enquanto Manny procura outros mamutes.",
    piadas: []
  },

  {
    titulo: "A Era do Gelo 3",
    tituloBusca: "Ice Age: Dawn of the Dinosaurs",
    ano: 2009,
    posterUrl: "",
    data: "",
    nota: 0,
    sinopse: "A turma descobre um mundo subterrâneo de dinossauros ao resgatar Sid, que adotou três ovos.",
    piadas: []
  },

  {
    titulo: "A Era do Gelo 4",
    tituloBusca: "Ice Age: Continental Drift",
    ano: 2012,
    posterUrl: "",
    data: "",
    nota: 0,
    sinopse: "A deriva dos continentes separa Manny da família e ele vive uma aventura no mar enfrentando piratas.",
    piadas: []
  },

  {
    titulo: "A Era do Gelo 5",
    tituloBusca: "Ice Age: Collision Course",
    ano: 2016,
    posterUrl: "",
    data: "",
    nota: 0,
    sinopse: "A perseguição de Scrat pela noz desencadeia eventos cósmicos que ameaçam o mundo da turma.",
    piadas: []
  },

  {
    titulo: "SOCORRO!",
    tituloBusca: "",
    ano: 2024,
    posterUrl: "",
    data: "",
    nota: 0,
    sinopse: "Uma comédia de confusões. (Confirme o filme exato e ajuste título/ano/sinopse.)",
    piadas: []
  },

  {
    titulo: "Carrinhos",
    tituloBusca: "The Little Cars",
    ano: 2006,
    posterUrl: "",
    data: "",
    nota: 0,
    sinopse: "Animação da Video Brinquedo sobre carrinhos de corrida (não confundir com 'Carros', da Disney/Pixar).",
    piadas: []
  },

  {
    titulo: "A Casa dos Vilões do Mickey Mouse",
    tituloBusca: "Mickey's House of Villains",
    ano: 2001,
    posterUrl: "",
    data: "",
    nota: 0,
    sinopse: "No Dia das Bruxas, os vilões da Disney tomam a casa do Mickey para uma noite cheia de sustos e diversão.",
    piadas: []
  },

  {
    titulo: "Vida de Inseto",
    tituloBusca: "A Bug's Life",
    ano: 1998,
    posterUrl: "",
    data: "",
    nota: 0,
    sinopse: "Uma formiga atrapalhada recruta um grupo de insetos de circo achando que são guerreiros para salvar o formigueiro dos gafanhotos.",
    piadas: []
  },

  {
    titulo: "Klaus",
    tituloBusca: "Klaus",
    ano: 2019,
    posterUrl: "",
    data: "",
    nota: 0,
    sinopse: "Um carteiro preguiçoso enviado a uma vila gelada faz amizade com um misterioso fabricante de brinquedos e, sem querer, dá origem à lenda do Papai Noel.",
    piadas: []
  }

];

/* Não mexa nesta linha — ela disponibiliza os filmes pra página. */
if (typeof window !== "undefined") { window.FILMES = FILMES; }
