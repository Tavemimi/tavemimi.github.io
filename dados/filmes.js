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
   posterUrl   (texto)  OPCIONAL. Um link direto de imagem (https://...)
                        OU o caminho de um arquivo que você guarde no projeto.
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
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTg5NzY0MzA2MV5BMl5BanBnXkFtZTYwNDc3NTc2._V1_QL75_UX380_CR0,0,380,562_.jpg",
    data: "2026-08-15",
    nota: 4.5,
    sinopse: "Um carro de corrida arrogante se perde na cidadezinha de Radiator Springs e aprende que amizade vale mais que troféus.",
    piadas: [
      "(exemplo) Trocar pela nossa lembrança deste filme."
    ]
  },

  {
    titulo: "Carros 2",
    tituloBusca: "Cars 2",
    ano: 2011,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTUzNTc3MTU3M15BMl5BanBnXkFtZTcwMzIxNTc3NA@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    data: "2026-08-15",
    nota: 4,
    sinopse: "Relâmpago McQueen e o Mate vão parar no meio de uma trama de espionagem internacional durante uma corrida mundial.",
    piadas: [
      "(exemplo) Trocar pela nossa lembrança deste filme."
    ]
  },

  {
    titulo: "WALL-E",
    tituloBusca: "WALL-E",
    imdbId: "tt0910970",
    ano: 2008,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    data: "2026-08-15",
    nota: 5,
    sinopse: "Um robozinho que limpa a Terra abandonada se apaixona por outra robô e acaba embarcando numa aventura que pode salvar a humanidade.",
    piadas: [
      "(exemplo) Trocar pela nossa lembrança deste filme."
    ]
  },

  {
    titulo: "Elementos",
    tituloBusca: "Elemental",
    ano: 2023,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNjU2MjE1OGItZjdmYS00ZmIyLTljNjYtOWI5ZGRkZjM4NDEwXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    data: "2026-08-15",
    nota: 4.5,
    sinopse: "Numa cidade onde fogo, água, terra e ar convivem, uma jovem de fogo e um rapaz de água descobrem o quanto têm em comum.",
    piadas: [
      "(exemplo) Trocar pela nossa lembrança deste filme."
    ]
  },

  {
    titulo: "Zootopia 2",
    tituloBusca: "Zootopia 2",
    ano: 2025,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYjg1Mjc3MjQtMTZjNy00YWVlLWFhMWEtMWI3ZTgxYjJmNmRlXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    data: "2026-08-15",
    nota: 4.5,
    sinopse: "A coelha Judy e a raposa Nick voltam à ativa com um novo mistério para desvendar na metrópole dos animais. (Confira a sinopse oficial quando sair.)",
    piadas: [
      "(exemplo) Trocar pela nossa lembrança deste filme."
    ]
  },

  {
    titulo: "Cara de Um, Focinho de Outro",
    tituloBusca: "Hoppers",
    ano: 2026,
    posterUrl: "https://image.tmdb.org/t/p/w500/ftPFJBGbldoWiiPrmesW96zBzdH.jpg",
    data: "2026-08-15",
    nota: 3.5,
    sinopse: "Animação da Pixar: uma jovem tem a consciência transferida para o corpo de um castor robótico e passa a transitar entre o mundo humano e o dos animais.",
    piadas: [
      "(exemplo) Trocar pela nossa lembrança deste filme."
    ]
  },

  {
    titulo: "Cavaleiro da Lua",
    tituloBusca: "Moon Knight",
    ano: 2022,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNDAzNmYwZjgtNDc3YS00ZDMyLTk0MjktMTg4MGNmNGU3MjlhXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    data: "2026-08-15",
    nota: 4,
    sinopse: "Um homem com transtorno dissociativo descobre que compartilha o corpo com um justiceiro ligado a um deus egípcio.",
    piadas: [
      "(exemplo) Trocar pela nossa lembrança deste filme."
    ]
  },

  {
    titulo: "Meu Malvado Favorito",
    tituloBusca: "Despicable Me",
    ano: 2010,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTY3NjY0MTQ0Nl5BMl5BanBnXkFtZTcwMzQ2MTc0Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    data: "2026-08-22",
    nota: 4.5,
    sinopse: "Um vilão genial planeja roubar a Lua, mas tem seus planos bagunçados ao adotar três meninas órfãs.",
    piadas: [
      "(exemplo) Trocar pela nossa lembrança deste filme."
    ]
  },

  {
    titulo: "Tá Dando Onda",
    tituloBusca: "Surf's Up",
    ano: 2007,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjE4NDE3NzcwM15BMl5BanBnXkFtZTcwMTI0ODYzMw@@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    data: "2026-08-22",
    nota: 4,
    sinopse: "Um documentário cômico acompanha pinguins surfistas numa competição mundial de surfe.",
    piadas: [
      "(exemplo) Trocar pela nossa lembrança deste filme."
    ]
  },

  {
    titulo: "Wonka",
    tituloBusca: "Wonka",
    ano: 2023,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BM2Y1N2ZhNjctYjVhZC00MDg2LWFhNTItMzI3ZjAwZDhjYmFiXkEyXkFqcGc@._V1_QL75_UY562_CR35,0,380,562_.jpg",
    data: "2026-08-22",
    nota: 4.5,
    sinopse: "A história de como o jovem e sonhador Willy Wonka se tornou o maior chocolateiro do mundo.",
    piadas: [
      "(exemplo) Trocar pela nossa lembrança deste filme."
    ]
  },

  {
    titulo: "Esquadrão Suicida",
    tituloBusca: "The Suicide Squad",
    ano: 2021,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMWU3Y2NlZmEtMjJjNS00ZWMxLWE1MzctYWYyMjMzMDdkNTE4XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    data: "2026-08-22",
    nota: 4,
    sinopse: "Um grupo de vilões presos recebe uma missão quase impossível numa ilha remota em troca da liberdade.",
    piadas: [
      "(exemplo) Trocar pela nossa lembrança deste filme."
    ]
  },

  {
    titulo: "A Noiva Cadáver",
    tituloBusca: "Corpse Bride",
    ano: 2005,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTk1MTY1NjU4MF5BMl5BanBnXkFtZTcwNjIzMTEzMw@@._V1_QL75_UY562_CR0,0,380,562_.jpg",
    data: "2026-08-24",
    nota: 4.5,
    sinopse: "Um rapaz tímido ensaia os votos na floresta e acaba casado por engano com uma noiva do mundo dos mortos.",
    piadas: [
      "(exemplo) Trocar pela nossa lembrança deste filme."
    ]
  },

  {
    titulo: "Arcane",
    tituloBusca: "Arcane",
    ano: 2021,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYjA2NzhlMDItNWRmZC00MzRjLWE3ZjAtZjBlZDAwOWY2ODdjXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    data: "2026-09-15",
    nota: 5,
    sinopse: "Duas irmãs se veem em lados opostos de um conflito entre duas cidades, em meio à ascensão de tecnologia e magia. (É série, mas entrou no acervo.)",
    piadas: [
      "(exemplo) Trocar pela nossa lembrança deste filme."
    ]
  },

  {
    titulo: "A Nova Onda do Imperador",
    tituloBusca: "The Emperor's New Groove",
    ano: 2000,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjM2MWU5ZDEtNDZlZC00ZmQ2LThiOTEtMmZkMzAxMmI5MGIyXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    data: "2026-10-09",
    nota: 5,
    sinopse: "Um imperador mimado é transformado em lhama e precisa da ajuda de um camponês de bom coração para recuperar o trono.",
    piadas: [
      "(exemplo) Trocar pela nossa lembrança deste filme."
    ]
  },

  {
    titulo: "A Nova Onda do Kronk",
    tituloBusca: "Kronk's New Groove",
    ano: 2005,
    posterUrl: "https://image.tmdb.org/t/p/w500/7g5Y8bLhThN91pqhJs7KVylwIXi.jpg",
    data: "2026-10-09",
    nota: 4,
    sinopse: "O desastrado Kronk tenta provar ao pai que fez algo da vida, aprontando muita confusão pelo caminho.",
    piadas: [
      "(exemplo) Trocar pela nossa lembrança deste filme."
    ]
  },

  {
    titulo: "Toy Story 5",
    tituloBusca: "Toy Story 5",
    ano: 2026,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BZTI1YTBiNmEtYWUxZi00YzFkLWIzNjMtMmZjMmY2NzM0ZWMzXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    data: "2026-10-09",
    nota: 4.5,
    sinopse: "Mais uma aventura dos brinquedos mais queridos do cinema. (Confira a sinopse oficial quando sair.)",
    piadas: [
      "(exemplo) Trocar pela nossa lembrança deste filme."
    ]
  },

  {
    titulo: "Invocação do Mal 3",
    tituloBusca: "The Conjuring: The Devil Made Me Do It",
    ano: 2021,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNThkYWE3OGItNzAyNC00N2U4LThjY2QtMGQwYjZhYTI1MzMwXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    data: "2026-10-10",
    nota: 4,
    sinopse: "Os investigadores Ed e Lorraine Warren enfrentam um caso real em que um acusado de assassinato alega ter sido possuído.",
    piadas: [
      "(exemplo) Trocar pela nossa lembrança deste filme."
    ]
  },

  {
    titulo: "Invocação do Mal 4",
    tituloBusca: "The Conjuring: Last Rites",
    ano: 2025,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BM2VmMzRkYzgtMzg2ZC00OTFkLTkwMTYtNTMxNjM2YzI1MjgyXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    data: "2026-10-10",
    nota: 4,
    sinopse: "O capítulo final da saga dos Warren os coloca diante de seu caso mais assustador. (Confira a sinopse oficial.)",
    piadas: [
      "(exemplo) Trocar pela nossa lembrança deste filme."
    ]
  },

  {
    titulo: "Possuída no Deserto",
    tituloBusca: "Killing Faith",
    ano: 2025,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjc3Yzk4NzctMjFkNy00YmZhLTg3YmUtM2ZkZmQ4MmQ4MWRjXkEyXkFqcGc@._V1_QL75_UY562_CR0,0,380,562_.jpg",
    data: "2026-10-10",
    nota: 3.5,
    sinopse: "Um terror sobrenatural ambientado no isolamento do deserto, onde a fé de uma mulher é posta à prova por forças malignas.",
    piadas: [
      "(exemplo) Trocar pela nossa lembrança deste filme."
    ]
  },

  {
    titulo: "O Nascimento do Mal",
    tituloBusca: "Bed Rest",
    ano: 2022,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYzYzY2Q3YTAtYWQ5MS00ZjIxLTllNzEtZWMzOTc2MWZjODM3XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    data: "2026-10-11",
    nota: 3.5,
    sinopse: "Uma gestante em repouso numa casa nova passa a ser atormentada por presenças sobrenaturais enquanto tenta proteger o bebê.",
    piadas: [
      "(exemplo) Trocar pela nossa lembrança deste filme."
    ]
  },

  {
    titulo: "A Era do Gelo",
    tituloBusca: "Ice Age",
    ano: 2002,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMDBlYzU2OGMtOGJjNi00ZGZjLWIwNjMtYzdiZjkwYWNjZDljXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    data: "2026-10-19",
    nota: 4.5,
    sinopse: "Um mamute, uma preguiça e um tigre-dentes-de-sabre se unem para devolver um bebê humano à sua família durante a era glacial.",
    piadas: [
      "(exemplo) Trocar pela nossa lembrança deste filme."
    ]
  },

  {
    titulo: "A Era do Gelo 2",
    tituloBusca: "Ice Age: The Meltdown",
    ano: 2006,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjAwODg3OTAxMl5BMl5BanBnXkFtZTcwMjg2NjYyMw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    data: "2026-10-19",
    nota: 4,
    sinopse: "O degelo ameaça o vale e a turma precisa migrar antes que tudo vire água, enquanto Manny procura outros mamutes.",
    piadas: [
      "(exemplo) Trocar pela nossa lembrança deste filme."
    ]
  },

  {
    titulo: "A Era do Gelo 3",
    tituloBusca: "Ice Age: Dawn of the Dinosaurs",
    ano: 2009,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BZWJjZDYwMjgtZDZiMy00YzcyLThjN2YtYjI1ZDQ2ZDJkOTVmXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    data: "2026-10-21",
    nota: 4,
    sinopse: "A turma descobre um mundo subterrâneo de dinossauros ao resgatar Sid, que adotou três ovos.",
    piadas: [
      "(exemplo) Trocar pela nossa lembrança deste filme."
    ]
  },

  {
    titulo: "A Era do Gelo 4",
    tituloBusca: "Ice Age: Continental Drift",
    ano: 2012,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTM3NDM5MzY5Ml5BMl5BanBnXkFtZTcwNjExMDUwOA@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    data: "2026-10-24",
    nota: 3.5,
    sinopse: "A deriva dos continentes separa Manny da família e ele vive uma aventura no mar enfrentando piratas.",
    piadas: [
      "(exemplo) Trocar pela nossa lembrança deste filme."
    ]
  },

  {
    titulo: "A Era do Gelo 5",
    tituloBusca: "Ice Age: Collision Course",
    ano: 2016,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BZmExOGMxNzMtYjc3MC00OWU5LTg5OTAtNmRhNzBkYzk2ZGE1XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    data: "2026-10-24",
    nota: 3.5,
    sinopse: "A perseguição de Scrat pela noz desencadeia eventos cósmicos que ameaçam o mundo da turma.",
    piadas: [
      "(exemplo) Trocar pela nossa lembrança deste filme."
    ]
  },

  {
    titulo: "SOCORRO!",
    tituloBusca: "Send Help",
    ano: 2026,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BOTgxOWY5NTMtYjdiNi00NTIyLTkwMTQtMWNjM2IzYTU0ODgyXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    data: "2026-10-24",
    nota: 3.5,
    sinopse: "Suspense de comédia e terror dirigido por Sam Raimi: dois colegas de trabalho ficam presos numa ilha e a convivência vira um pesadelo.",
    piadas: [
      "(exemplo) Trocar pela nossa lembrança deste filme."
    ]
  },

  {
    titulo: "Carrinhos",
    tituloBusca: "The Little Cars in the Great Race",
    ano: 2006,
    posterUrl: "https://image.tmdb.org/t/p/w500/9bA11rxTYfwU3ht7rNPJTpocyCr.jpg",
    data: "2026-10-24",
    nota: 3,
    sinopse: "Animação da Video Brinquedo sobre carrinhos de corrida (não confundir com 'Carros', da Disney/Pixar).",
    piadas: [
      "(exemplo) Trocar pela nossa lembrança deste filme."
    ]
  },

  {
    titulo: "A Casa dos Vilões do Mickey Mouse",
    tituloBusca: "Mickey's House of Villains",
    ano: 2002,
    posterUrl: "https://image.tmdb.org/t/p/w500/oV6q3SbgVjRD5Dhzo3lYx7viqUQ.jpg",
    data: "2026-10-24",
    nota: 4,
    sinopse: "No Dia das Bruxas, os vilões da Disney tomam a casa do Mickey para uma noite cheia de sustos e diversão.",
    piadas: [
      "(exemplo) Trocar pela nossa lembrança deste filme."
    ]
  },

  {
    titulo: "Vida de Inseto",
    tituloBusca: "A Bug's Life",
    ano: 1998,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNGI3Mjc1ZjUtYTJhYS00NjBiLTgyYjctODU5NTNlMWJiYjYzXkEyXkFqcGc@._V1_QL75_UX380_CR0,13,380,562_.jpg",
    data: "2026-10-24",
    nota: 4,
    sinopse: "Uma formiga atrapalhada recruta um grupo de insetos de circo achando que são guerreiros para salvar o formigueiro dos gafanhotos.",
    piadas: [
      "(exemplo) Trocar pela nossa lembrança deste filme."
    ]
  },

  {
    titulo: "Klaus",
    tituloBusca: "Klaus",
    ano: 2019,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BZDA4ODhlMzctNGRmYi00NmViLTkxZGYtZjRkNGQ5YzYwYWVlXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    data: "2026-10-31",
    nota: 5,
    sinopse: "Um carteiro preguiçoso enviado a uma vila gelada faz amizade com um misterioso fabricante de brinquedos e, sem querer, dá origem à lenda do Papai Noel.",
    piadas: [
      "(exemplo) Trocar pela nossa lembrança deste filme."
    ]
  },

  {
    titulo: "Shrek",
    tituloBusca: "Shrek",
    ano: 2001,
    posterUrl: "https://image.tmdb.org/t/p/w500/wxeqfC221YMptRRdzxlijAh7q8l.jpg",
    data: "2026-10-30",
    nota: 5,
    sinopse: "Um ogro rabugento parte numa jornada para resgatar uma princesa e recuperar seu pântano, ao lado de um burro tagarela, descobrindo amizade e amor pelo caminho.",
    piadas: [
      "(exemplo) Trocar pela nossa lembrança deste filme."
    ]
  },

  {
    titulo: "Shrek 2",
    tituloBusca: "Shrek 2",
    ano: 2004,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMzNmNjQ1NmUtNzhiZS00YWE2LTg4N2ItZTA2ODdmOTMwOTQ1XkEyXkFqcGc@._V1_QL75_UY562_CR0,0,380,562_.jpg",
    data: "2026-11-01",
    nota: 5,
    sinopse: "Shrek e Fiona visitam o reino de Tão Tão Distante para conhecer os pais dela, mas o Rei e a Fada Madrinha não aceitam o ogro como genro.",
    piadas: [
      "Só tem puta nesse reino kkkk",
      "O Príncipe Encantado queima a rosca, usa batom de cereja... me fala se não é um seca buceta"
    ]
  },

  {
    titulo: "Shrek Terceiro",
    tituloBusca: "Shrek the Third",
    ano: 2007,
    posterUrl: "https://image.tmdb.org/t/p/w500/abw1mIJIjG9X3xSEffE9siLcOkN.jpg",
    data: "2026-11-02",
    nota: 5,
    sinopse: "Com a morte do Rei, Shrek precisa encontrar o herdeiro do trono de Tão Tão Distante enquanto o Príncipe Encantado arma para tomar o reino.",
    piadas: [
      "Fumando incenso na escola kkkk",
      "O príncipe continua afeminado",
      "O Shrek querendo comprar cigarro"
    ]
  },

  {
    titulo: "Shrek Para Sempre",
    tituloBusca: "Shrek Forever After",
    ano: 2010,
    posterUrl: "https://image.tmdb.org/t/p/w500/iFXVU0ni6YWgQNSPkoGO1Tk5L3g.jpg",
    data: "2026-11-02",
    nota: 5,
    sinopse: "Cansado da vida domesticada, Shrek faz um pacto com Rumpelstiltskin e acaba num mundo paralelo onde nunca existiu — e precisa reconquistar tudo.",
    piadas: [
      "Morreu inocente e virou ceia de natal kkkkk",
      "Só dá valor quando perde",
      "Sempre leia a letra miúda"
    ]
  },

  {
    titulo: "Bee Movie",
    tituloBusca: "Bee Movie",
    ano: 2007,
    posterUrl: "https://image.tmdb.org/t/p/w500/puW6ynGLcCowqiYvhPhdbNH8Zzj.jpg",
    data: "2026-11-02",
    nota: 5,
    sinopse: "Uma abelha recém-formada decide processar a humanidade por explorar o mel, e sua amizade com uma florista vira caso de tribunal.",
    piadas: [
      "A XERECA TÁ MELANDO PARA A ABELHA KKKKKKKK",
      "Casal mais sem personalidade do universo",
      "Tanta coisa para querer na vida, a mina quer vender FLOR",
      "O protagonista cursa Letras na UFMG",
      "Ideias estúpidas têm consequências inusitadas"
    ]
  }

];

/* Não mexa nesta linha — ela disponibiliza os filmes pra página. */
if (typeof window !== "undefined") { window.FILMES = FILMES; }
