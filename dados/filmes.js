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
   saga        (texto)  OPCIONAL. Nome da série (ex: "Shrek"). Filmes da mesma saga
                        ficam juntos na lista, sempre na ordem 1, 2, 3...
   ordem       (número) OPCIONAL. Posição do filme dentro da saga (1, 2, 3...).
   posterUrl   (texto)  OPCIONAL. Um link direto de imagem (https://...)
                        OU o caminho de um arquivo que você guarde no projeto.
                        Se preenchido, essa imagem tem PRIORIDADE sobre a
                        busca automática. Deixe "" para o site buscar sozinho.
   data        (texto)  Data em que assistiram juntos. Formato "AAAA-MM-DD".
                        Deixe "" se ainda não quiser preencher.
   nota        (número) Avaliação de 0 a 5 (aceita meio: 3.5, 4.5, etc.).
                        Deixe 0 enquanto não avaliarem.
                        Filmes que vocês ainda não avaliaram usam a nota do IMDb
                        convertida pra 5 estrelas (nota ÷ 2, em passos de 0,5).
   sinopse     (texto)  Uma sinopse curta do filme.
   piadas      (lista)  Piadinhas / lembranças internas de vocês.
                        Deixe [] (vazio) enquanto não tiverem piadinhas.
   ========================================================================= */

const FILMES = [

  {
    titulo: "Carros",
    tituloBusca: "Cars",
    ano: 2006,
    saga: "Carros",
    ordem: 1,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTg5NzY0MzA2MV5BMl5BanBnXkFtZTYwNDc3NTc2._V1_QL75_UX380_CR0,0,380,562_.jpg",
    data: "2026-08-15",
    nota: 3.5,
    sinopse: "Um carro de corrida arrogante se perde na cidadezinha de Radiator Springs e aprende que amizade vale mais que troféus.",
    piadas: [
      "KA-CHOW! O ego do Relâmpago McQueen não cabia nem na pista",
      "Destruiu a rua inteira e ainda teve que consertar de graça. Justiça de Radiator Springs",
      "Mate dando ré e se achando o mais esperto da estrada",
      "Tombar trator dormindo: o esporte radical da cidade"
    ]
  },

  {
    titulo: "Carros 2",
    tituloBusca: "Cars 2",
    ano: 2011,
    saga: "Carros",
    ordem: 2,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTUzNTc3MTU3M15BMl5BanBnXkFtZTcwMzIxNTc3NA@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    data: "2026-08-15",
    nota: 3,
    sinopse: "Relâmpago McQueen e o Mate vão parar no meio de uma trama de espionagem internacional durante uma corrida mundial.",
    piadas: [
      "O Mate virou espião sem querer e se deu melhor que muito agente de verdade",
      "O banheiro japonês do Mate: a cena que ninguém esperava ser tão caótica",
      "Os vilões são os 'limões' e estão revoltados com o mundo dos carros",
      "McQueen brigando com o melhor amigo porque se envergonhou dele. Ê, rapaz"
    ]
  },

  {
    titulo: "WALL-E",
    tituloBusca: "WALL-E",
    imdbId: "tt0910970",
    ano: 2008,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    data: "2026-08-15",
    nota: 4,
    sinopse: "Um robozinho que limpa a Terra abandonada se apaixona por outra robô e acaba embarcando numa aventura que pode salvar a humanidade.",
    piadas: [
      "O robozinho mais fofo do universo e o melhor amigo dele é uma barata. Respeito",
      "A EVE destruindo tudo que vê e o WALL-E apaixonado do mesmo jeito",
      "Os humanos no Axiom nem andam mais, vivem de cadeira flutuante. Espelho do futuro",
      "O WALL-E mostrou mais sentimento sem falar nada do que muito casal por aí"
    ]
  },

  {
    titulo: "Elementos",
    tituloBusca: "Elemental",
    ano: 2023,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNjU2MjE1OGItZjdmYS00ZmIyLTljNjYtOWI5ZGRkZjM4NDEwXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    data: "2026-08-15",
    nota: 3.5,
    sinopse: "Numa cidade onde fogo, água, terra e ar convivem, uma jovem de fogo e um rapaz de água descobrem o quanto têm em comum.",
    piadas: [
      "Fogo e água se apaixonando: relacionamento que dá vapor kkkk",
      "O Wade chora por tudo. Literalmente, ele é água",
      "A Ember perde a paciência e vira fogueira. Todo mundo conhece alguém assim",
      "Moral do filme: quem ama dá um jeito de se entender"
    ]
  },

  {
    titulo: "Zootopia 2",
    tituloBusca: "Zootopia 2",
    ano: 2025,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYjg1Mjc3MjQtMTZjNy00YWVlLWFhMWEtMWI3ZTgxYjJmNmRlXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    data: "2026-08-15",
    nota: 3.5,
    sinopse: "Judy e Nick, agora detetives, seguem a trilha de um réptil misterioso que chega à cidade e vira a metrópole dos mamíferos de cabeça para baixo.",
    piadas: [
      "Judy e Nick são a dupla de detetives que a gente queria ter no trabalho",
      "Um réptil misterioso chega e vira a cidade dos mamíferos de cabeça para baixo. Boa sorte, Judy",
      "O Nick continua com a lábia de raposa, e funciona"
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
      "Passar a mente pra um castor robô é o jeito mais radical de defender a floresta",
      "Prefeito Jerry querendo abrir uma rodovia no meio da mata. Todo prefeito tem uma dessas ideias",
      "Rei George, o castor majestoso, é a autoridade que a gente queria ter no condomínio"
    ]
  },

  {
    titulo: "Cavaleiro da Lua",
    tituloBusca: "Moon Knight",
    ano: 2022,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNDAzNmYwZjgtNDc3YS00ZDMyLTk0MjktMTg4MGNmNGU3MjlhXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    data: "2026-08-15",
    nota: 3.5,
    sinopse: "Um homem com transtorno dissociativo descobre que compartilha o corpo com um justiceiro ligado a um deus egípcio.",
    piadas: [
      "Steven Grant só queria trabalhar na loja de souvenirs do museu e acabou virando herói por acidente",
      "Quem é o Marc, quem é o Steven, quem é o Jake? Ninguém sabe",
      "O Khonshu é o chefe mais chato do mundo e não tem como pedir demissão",
      "A deusa hipopótamo rouba a cena kkkk"
    ]
  },

  {
    titulo: "Meu Malvado Favorito",
    tituloBusca: "Despicable Me",
    ano: 2010,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTY3NjY0MTQ0Nl5BMl5BanBnXkFtZTcwMzQ2MTc0Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    data: "2026-08-22",
    nota: 4,
    sinopse: "Um vilão genial planeja roubar a Lua, mas tem seus planos bagunçados ao adotar três meninas órfãs.",
    piadas: [
      "Planejou roubar a Lua e acabou roubado por três meninas. Amor que desarma",
      "Os Minions falam 'banana' em todos os idiomas e ninguém precisa de legenda",
      "O Gru é o único vilão que perde tempo lendo historinha pra criança dormir kkkk",
      "O Vector, de agasalho laranja, é o vilão mais dramático da história"
    ]
  },

  {
    titulo: "Tá Dando Onda",
    tituloBusca: "Surf's Up",
    ano: 2007,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjE4NDE3NzcwM15BMl5BanBnXkFtZTcwMTI0ODYzMw@@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    data: "2026-08-22",
    nota: 3.5,
    sinopse: "Um documentário cômico acompanha pinguins surfistas numa competição mundial de surfe.",
    piadas: [
      "Pinguim surfista em documentário e ainda tem rivalidade de campeonato",
      "O Cody queria ser o rei das ondas e descobriu que surfar é se divertir. Mensagem boa",
      "O Big Z é o mestre zen que todo mundo queria ter",
      "O Tank Evans, campeão arrogante, é o tipo de gente que a gente adora ver perder"
    ]
  },

  {
    titulo: "Wonka",
    tituloBusca: "Wonka",
    ano: 2023,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BM2Y1N2ZhNjctYjVhZC00MDg2LWFhNTItMzI3ZjAwZDhjYmFiXkEyXkFqcGc@._V1_QL75_UY562_CR35,0,380,562_.jpg",
    data: "2026-08-22",
    nota: 3.5,
    sinopse: "A história de como o jovem e sonhador Willy Wonka se tornou o maior chocolateiro do mundo.",
    piadas: [
      "O Wonka assinou contrato sem ler e pagou caro. Quem nunca? (veja: letra miúda)",
      "O cartel do chocolate é o crime organizado mais docinho da história",
      "O Oompa Loompa cobrando o cacau dele com cara de poucos amigos",
      "Chocolate que faz flutuar: único doping aceitável"
    ]
  },

  {
    titulo: "Esquadrão Suicida",
    tituloBusca: "The Suicide Squad",
    ano: 2021,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMWU3Y2NlZmEtMjJjNS00ZWMxLWE1MzctYWYyMjMzMDdkNTE4XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    data: "2026-08-22",
    nota: 3.5,
    sinopse: "Um grupo de vilões presos recebe uma missão quase impossível numa ilha remota em troca da liberdade.",
    piadas: [
      "Peacemaker ama tanto a paz que mata todo mundo pra conseguir. Lógica impecável",
      "O Tubarão-Rei só quer fazer amigo e come gente. Dilema",
      "O Polka-Dot Man era piada e virou peça-chave",
      "A Ratcatcher 2 e o ratinho dela: a relação mais bonita do filme"
    ]
  },

  {
    titulo: "A Noiva Cadáver",
    tituloBusca: "Corpse Bride",
    ano: 2005,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTk1MTY1NjU4MF5BMl5BanBnXkFtZTcwNjIzMTEzMw@@._V1_QL75_UY562_CR0,0,380,562_.jpg",
    data: "2026-08-24",
    nota: 3.5,
    sinopse: "Um rapaz tímido ensaia os votos na floresta e acaba casado por engano com uma noiva do mundo dos mortos.",
    piadas: [
      "O mundo dos mortos é bem mais animado que o dos vivos. Faz sentido",
      "O Victor só ensaiou os votos e já se casou sem querer. Casamento mais rápido do mundo",
      "O Scraps, o cachorrinho esqueleto, rouba o filme kkkk",
      "O Barkis é o vilão que dá pra ver de longe"
    ]
  },

  {
    titulo: "Arcane",
    tituloBusca: "Arcane",
    ano: 2021,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYjA2NzhlMDItNWRmZC00MzRjLWE3ZjAtZjBlZDAwOWY2ODdjXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    data: "2026-09-15",
    nota: 4.5,
    sinopse: "Duas irmãs se veem em lados opostos de um conflito entre duas cidades, em meio à ascensão de tecnologia e magia. (É série, mas entrou no acervo.)",
    piadas: [
      "Arcane: desenho animado que faz a gente esquecer que é desenho",
      "A Jinx dá medo e dó ao mesmo tempo. Que personagem",
      "O Silco é o vilão mais elegante e mais bem escrito, chega a dar raiva de gostar",
      "Piltover e Zaun: duas cidades e uma briga de irmãs"
    ]
  },

  {
    titulo: "A Nova Onda do Imperador",
    tituloBusca: "The Emperor's New Groove",
    ano: 2000,
    saga: "A Nova Onda",
    ordem: 1,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjM2MWU5ZDEtNDZlZC00ZmQ2LThiOTEtMmZkMzAxMmI5MGIyXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    data: "2026-10-09",
    nota: 3.5,
    sinopse: "Um imperador mimado é transformado em lhama e precisa da ajuda de um camponês de bom coração para recuperar o trono.",
    piadas: [
      "POR QUE A GENTE TEM ESSA ALAVANCA, KRONK?",
      "O Kuzco virou lhama e ainda achou que o problema era o mundo",
      "A Yzma é a vilã mais exagerada e mais carismática da Disney",
      "Os bolinhos de espinafre do Kronk são a melhor coisa daquele palácio"
    ]
  },

  {
    titulo: "A Nova Onda do Kronk",
    tituloBusca: "Kronk's New Groove",
    ano: 2005,
    saga: "A Nova Onda",
    ordem: 2,
    posterUrl: "https://image.tmdb.org/t/p/w500/7g5Y8bLhThN91pqhJs7KVylwIXi.jpg",
    data: "2026-10-09",
    nota: 3,
    sinopse: "O desastrado Kronk tenta provar ao pai que fez algo da vida, aprontando muita confusão pelo caminho.",
    piadas: [
      "O Kronk fingindo ser bem-sucedido pro pai. Todo mundo já inflou o currículo uma vez",
      "A explosão de queijos no restaurante é o caos mais gostoso da Disney",
      "Yzma ajudando o Kronk a mentir: aliança improvável"
    ]
  },

  {
    titulo: "Toy Story 5",
    tituloBusca: "Toy Story 5",
    ano: 2026,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BZTI1YTBiNmEtYWUxZi00YzFkLWIzNjMtMmZjMmY2NzM0ZWMzXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    data: "2026-10-09",
    nota: 3.5,
    sinopse: "Buzz, Woody, Jessie e o resto da turma enfrentam uma nova ameaça à diversão: a tecnologia.",
    piadas: [
      "Os brinquedos contra a tecnologia: só falta o Woody enfrentar um tablet kkkk",
      "Quinto filme e o Woody continua fazendo o que faz de melhor: não abandonar ninguém",
      "Toy Story é a prova de que brinquedo também tem crise existencial"
    ]
  },

  {
    titulo: "Invocação do Mal 3",
    tituloBusca: "The Conjuring: The Devil Made Me Do It",
    ano: 2021,
    saga: "Invocação do Mal",
    ordem: 3,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNThkYWE3OGItNzAyNC00N2U4LThjY2QtMGQwYjZhYTI1MzMwXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    data: "2026-10-10",
    nota: 3,
    sinopse: "Os investigadores Ed e Lorraine Warren enfrentam um caso real em que um acusado de assassinato alega ter sido possuído.",
    piadas: [
      "O cara cometeu um crime e disse que foi o diabo: a defesa mais criativa da história",
      "Ed e Lorraine: o casal que investiga fantasma junto. Ideal de relacionamento kkkk",
      "Eu: 'não vou me assustar'. O filme: pula do sofá"
    ]
  },

  {
    titulo: "Invocação do Mal 4",
    tituloBusca: "The Conjuring: Last Rites",
    ano: 2025,
    saga: "Invocação do Mal",
    ordem: 4,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BM2VmMzRkYzgtMzg2ZC00OTFkLTkwMTYtNTMxNjM2YzI1MjgyXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    data: "2026-10-10",
    nota: 3,
    sinopse: "Ed e Lorraine Warren assumem um novo caso de horror sobrenatural que os obriga a um confronto final e a encarar seus maiores medos.",
    piadas: [
      "O capítulo final dos Warren: despedida de fantasma com dignidade",
      "Casal que enfrenta o capeta junto permanece junto",
      "Rir de nervoso foi o melhor efeito especial da sessão"
    ]
  },

  {
    titulo: "Possuída no Deserto",
    tituloBusca: "Killing Faith",
    ano: 2025,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjc3Yzk4NzctMjFkNy00YmZhLTg3YmUtM2ZkZmQ4MmQ4MWRjXkEyXkFqcGc@._V1_QL75_UY562_CR0,0,380,562_.jpg",
    data: "2026-10-10",
    nota: 3,
    sinopse: "Em 1859, uma mulher recém-libertada acredita que a filha está possuída, porque tudo que a menina toca morre, e convence um médico viúvo a levá-la numa viagem em busca de um curandeiro distante.",
    piadas: [
      "Tudo que a menina toca morre: a pior habilidade pra ter em casa",
      "O médico viúvo topou a viagem: ou é muito corajoso ou muito sem noção"
    ]
  },

  {
    titulo: "O Nascimento do Mal",
    tituloBusca: "Bed Rest",
    ano: 2022,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BYzYzY2Q3YTAtYWQ5MS00ZjIxLTllNzEtZWMzOTc2MWZjODM3XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
    data: "2026-10-11",
    nota: 2.5,
    sinopse: "Uma gestante em repouso numa casa nova passa a ser atormentada por presenças sobrenaturais enquanto tenta proteger o bebê.",
    piadas: [
      "Repouso absoluto virou terror: grávida precisa de cuidado e menos fantasma",
      "Casa nova, marido otimista e um fantasma de brinde",
      "As pessoas duvidando que ela viu algo. Sempre a mesma história nos filmes de terror"
    ]
  },

  {
    titulo: "A Era do Gelo",
    tituloBusca: "Ice Age",
    ano: 2002,
    saga: "A Era do Gelo",
    ordem: 1,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMDBlYzU2OGMtOGJjNi00ZGZjLWIwNjMtYzdiZjkwYWNjZDljXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    data: "2026-10-19",
    nota: 4,
    sinopse: "Um mamute, uma preguiça e um tigre-dentes-de-sabre se unem para devolver um bebê humano à sua família durante a era glacial.",
    piadas: [
      "O Scrat só queria a noz e já era o personagem mais famoso do filme",
      "O Sid é preguiça mesmo: vive sendo salvo e ainda reclama",
      "O Diego era do mal e virou melhor amigo: arco de redenção de tigre",
      "O Manny não sorri, mas dá a vida pelos outros"
    ]
  },

  {
    titulo: "A Era do Gelo 2",
    tituloBusca: "Ice Age: The Meltdown",
    ano: 2006,
    saga: "A Era do Gelo",
    ordem: 2,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMjAwODg3OTAxMl5BMl5BanBnXkFtZTcwMjg2NjYyMw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    data: "2026-10-19",
    nota: 3.5,
    sinopse: "O degelo ameaça o vale e a turma precisa migrar antes que tudo vire água, enquanto Manny procura outros mamutes.",
    piadas: [
      "A Ellie acha que é gambá e ainda assim fica com o Manny: melhor casal pré-histórico",
      "Crash e Eddie, os gambás irmãos, são o caos em pessoa",
      "Os urubus cantando musical enquanto esperam o jantar. Vilão paciente",
      "O degelo anunciando o fim do mundo e todo mundo ainda brigando por bobagem"
    ]
  },

  {
    titulo: "A Era do Gelo 3",
    tituloBusca: "Ice Age: Dawn of the Dinosaurs",
    ano: 2009,
    saga: "A Era do Gelo",
    ordem: 3,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BZWJjZDYwMjgtZDZiMy00YzcyLThjN2YtYjI1ZDQ2ZDJkOTVmXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    data: "2026-10-21",
    nota: 3.5,
    sinopse: "A turma descobre um mundo subterrâneo de dinossauros ao resgatar Sid, que adotou três ovos.",
    piadas: [
      "O Sid adota três ovos de dinossauro: a maior irresponsabilidade parental de todas",
      "O Buck é o único com plano e o único meio doido",
      "Scrat e Scratte brigando pela noz: romance que ninguém pediu e todo mundo adorou"
    ]
  },

  {
    titulo: "A Era do Gelo 4",
    tituloBusca: "Ice Age: Continental Drift",
    ano: 2012,
    saga: "A Era do Gelo",
    ordem: 4,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BMTM3NDM5MzY5Ml5BMl5BanBnXkFtZTcwNjExMDUwOA@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    data: "2026-10-24",
    nota: 3.5,
    sinopse: "A deriva dos continentes separa Manny da família e ele vive uma aventura no mar enfrentando piratas.",
    piadas: [
      "O Scrat causando a deriva dos continentes por causa da noz. Mais uma da noz",
      "O Capitão Gutt, o macaco pirata, é o vilão com mais pose do gelo",
      "A adolescência da Peaches é um caos igual a de qualquer humano",
      "A vó do Sid aparecendo pra roubar a cena kkkk"
    ]
  },

  {
    titulo: "A Era do Gelo 5",
    tituloBusca: "Ice Age: Collision Course",
    ano: 2016,
    saga: "A Era do Gelo",
    ordem: 5,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BZmExOGMxNzMtYjc3MC00OWU5LTg5OTAtNmRhNzBkYzk2ZGE1XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    data: "2026-10-24",
    nota: 3,
    sinopse: "A perseguição de Scrat pela noz desencadeia eventos cósmicos que ameaçam o mundo da turma.",
    piadas: [
      "O Scrat foi parar no espaço por causa de uma noz e ainda ameaçou o planeta",
      "Quinto filme e a franquia continua vivendo de meteoro e crise kkkk",
      "O Buck continua com a mesma pose enquanto o planeta corre risco"
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
      "Chefe e funcionária que se odeiam presos numa ilha: o RH nunca vai ver isso",
      "Sobreviver a um acidente de avião só pra continuar a briga de escritório",
      "Sam Raimi dirigindo: comédia e terror na mesma sessão, como manda o figurino"
    ]
  },

  {
    titulo: "Carrinhos",
    tituloBusca: "The Little Cars in the Great Race",
    ano: 2006,
    posterUrl: "https://image.tmdb.org/t/p/w500/9bA11rxTYfwU3ht7rNPJTpocyCr.jpg",
    data: "2026-10-24",
    nota: 0.5,
    sinopse: "Animação da Video Brinquedo sobre carrinhos de corrida (não confundir com 'Carros', da Disney/Pixar).",
    piadas: [
      "Rodópolis: a cidade onde o carro pensa e fala como gente e todo mundo é doido por corrida",
      "Carrinho entregador querendo ser piloto: o sonho de todo mundo que cansou do próprio trabalho",
      "Não é o 'Carros' da Disney: é Video Brinquedo, e a gente sabe a diferença kkkk"
    ]
  },

  {
    titulo: "A Casa dos Vilões do Mickey Mouse",
    tituloBusca: "Mickey's House of Villains",
    ano: 2002,
    posterUrl: "https://image.tmdb.org/t/p/w500/oV6q3SbgVjRD5Dhzo3lYx7viqUQ.jpg",
    data: "2026-10-24",
    nota: 3.5,
    sinopse: "No Dia das Bruxas, os vilões da Disney tomam a casa do Mickey para uma noite cheia de sustos e diversão.",
    piadas: [
      "Os vilões da Disney invadindo a casa do Mickey: o crossover mais caótico da infância",
      "Vilão fazendo reunião pra tomar o clube. Organização é tudo",
      "Pateta e Pato Donald no meio da confusão, como sempre"
    ]
  },

  {
    titulo: "Vida de Inseto",
    tituloBusca: "A Bug's Life",
    ano: 1998,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNGI3Mjc1ZjUtYTJhYS00NjBiLTgyYjctODU5NTNlMWJiYjYzXkEyXkFqcGc@._V1_QL75_UX380_CR0,13,380,562_.jpg",
    data: "2026-10-24",
    nota: 3.5,
    sinopse: "Uma formiga atrapalhada recruta um grupo de insetos de circo achando que são guerreiros para salvar o formigueiro dos gafanhotos.",
    piadas: [
      "O Flik foi contratar guerreiros e voltou com artistas de circo. Currículo não ajuda",
      "O Francis, a joaninha macho, se ofende quando chamam de 'ela'",
      "O Heimlich só pensa em comer e sonha em virar borboleta",
      "O Hopper sabe que a força dele depende do medo dos outros. Lição de vida"
    ]
  },

  {
    titulo: "Klaus",
    tituloBusca: "Klaus",
    ano: 2019,
    posterUrl: "https://m.media-amazon.com/images/M/MV5BZDA4ODhlMzctNGRmYi00NmViLTkxZGYtZjRkNGQ5YzYwYWVlXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    data: "2026-10-31",
    nota: 4,
    sinopse: "Um carteiro preguiçoso enviado a uma vila gelada faz amizade com um misterioso fabricante de brinquedos e, sem querer, dá origem à lenda do Papai Noel.",
    piadas: [
      "O carteiro mais preguiçoso do mundo acabou inventando o Natal. Sorte de principiante",
      "Duas famílias brigando há gerações e só pararam por causa de presente. Presente é poderoso",
      "O Klaus é o Papai Noel antes de ser o Papai Noel, e já era de chorar"
    ]
  },

  {
    titulo: "Shrek",
    tituloBusca: "Shrek",
    ano: 2001,
    saga: "Shrek",
    ordem: 1,
    posterUrl: "https://image.tmdb.org/t/p/w500/wxeqfC221YMptRRdzxlijAh7q8l.jpg",
    data: "2026-10-30",
    nota: 4,
    sinopse: "Um ogro rabugento parte numa jornada para resgatar uma princesa e recuperar seu pântano, ao lado de um burro tagarela, descobrindo amizade e amor pelo caminho.",
    piadas: [
      "'Ogros são como cebolas': camadas e muito choro",
      "O Burro falando sem parar e o Shrek aguentando. Paciência de pântano",
      "O Lord Farquaad compensando algo com aquele castelão",
      "O dragão dando mole pro Burro: casal improvável"
    ]
  },

  {
    titulo: "Shrek 2",
    tituloBusca: "Shrek 2",
    ano: 2004,
    saga: "Shrek",
    ordem: 2,
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
    saga: "Shrek",
    ordem: 3,
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
    saga: "Shrek",
    ordem: 4,
    posterUrl: "https://image.tmdb.org/t/p/w500/iFXVU0ni6YWgQNSPkoGO1Tk5L3g.jpg",
    data: "2026-11-06",
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
    data: "2026-11-06",
    nota: 2,
    sinopse: "Uma abelha recém-formada decide processar a humanidade por explorar o mel, e sua amizade com uma florista vira caso de tribunal.",
    piadas: [
      "A XERECA TÁ MELANDO PARA A ABELHA KKKKKKKK",
      "Casal mais sem personalidade do universo",
      "Tanta coisa para querer na vida, a mina quer vender FLOR",
      "O protagonista cursa Letras na UFMG",
      "Ideias estúpidas têm consequências inusitadas"
    ]
  },

  {
    titulo: "Sing! Quem Canta Seus Males Espanta",
    tituloBusca: "Sing",
    ano: 2016,
    saga: "Sing",
    ordem: 1,
    posterUrl: "https://image.tmdb.org/t/p/w500/rkPf3AH4DPJC1T26T8CwAjBHHvc.jpg",
    data: "2026-11-11",
    nota: 4,
    sinopse: "Um coala dono de teatro à beira da falência organiza um concurso de canto e reúne animais sonhadores que querem mudar de vida pela música.",
    piadas: [
      "Primeiro Astronauta Coala? Naaaaaoooo, dono de TEATRO, é ISSO que eu quero",
      "Coala do PIX - 171",
      "O pai do cara trabalhou 30 anos e o filho não soube cuidar",
      "\"Sua calça, bota na sacola\"",
      "Por que os bandidos são logos os macacos pretos?",
      "Porcaria Engenharia"
    ]
  },

  {
    titulo: "Madagascar",
    tituloBusca: "Madagascar",
    ano: 2005,
    saga: "Madagascar",
    ordem: 1,
    posterUrl: "https://image.tmdb.org/t/p/w500/9OFYnKQBdSfoSunwkImoTtYo9S9.jpg",
    data: "2026-11-12",
    nota: 5,
    sinopse: "Quatro animais do zoológico de Nova York fogem, vão parar na ilha de Madagascar e descobrem como é a vida selvagem de verdade.",
    piadas: [
      "\"A natureza não existe, ela pode te machucar\"",
      "Alex é um péssimo amigo e complexo",
      "Dublagem da Glória é tensa",
      "PLANETA DOS MACACOS",
      "Mamífero Superior, você sabe ler?",
      "Trouxe uma balinha?",
      "\"RELAÇÃO CONSANGUÍNEA\", DUBLAGEM DO CARAI KKKKKKK",
      "Ovo morder ocê",
      "Quem a foda é o gatão meu casa",
      "É o mercado central, é o mercado, e é central"
    ]
  },

  {
    titulo: "Madagascar 2",
    tituloBusca: "Madagascar: Escape 2 Africa",
    ano: 2008,
    saga: "Madagascar",
    ordem: 2,
    posterUrl: "https://image.tmdb.org/t/p/w500/xBOKF6ks8aFtvanyKPRfeZWErm.jpg",
    data: "2026-11-13",
    nota: 5,
    sinopse: "A turma tenta voltar a Nova York num avião improvisado, mas cai na África, onde Alex reencontra a família que ficou pra trás.",
    piadas: [
      "Leão afeminado",
      "Velha do diabo",
      "Girafa Hipocondríaca",
      "Licença maternidade para macho?"
    ]
  },

  {
    titulo: "Madagascar 3: Os Procurados",
    tituloBusca: "Madagascar 3: Europe's Most Wanted",
    ano: 2012,
    saga: "Madagascar",
    ordem: 3,
    posterUrl: "https://image.tmdb.org/t/p/w500/bPRvFj9MGeLeqidaTniUf8yQ0PW.jpg",
    data: "2026-11-14",
    nota: 5,
    sinopse: "Em fuga pela Europa, a turma se disfarça de circo itinerante pra escapar da implacável capitã de controle de animais de Monte Carlo.",
    piadas: [
      "TIGRE RUSSO KKKKKKKK",
      "Jaguar tá na maldade",
      "Leão Marinho calvo",
      "AFRO CIRCO KKKKKK",
      "Secaram a guarda ali hein",
      "Ursa com Down andando de Ducati",
      "Comprar um avião com ouro? Não, comprar um circo"
    ]
  },

  {
    titulo: "Sing 2",
    tituloBusca: "Sing 2",
    ano: 2021,
    saga: "Sing",
    ordem: 2,
    posterUrl: "https://image.tmdb.org/t/p/w500/3GR2a4IGp83ekkKQLB08IcUmc2S.jpg",
    data: "2026-12-14",
    nota: 4,
    sinopse: "Buster Moon e sua trupe sonham com o grande palco de Redshore City e precisam convencer um astro do rock recluso a voltar aos holofotes.",
    piadas: [
      "DESISTA, DESISTA DOS SEUS SONHOS E MORRA",
      "Já vi muitas cartadas de roteiro, mas essa é de fuder",
      "Isso prova que seus contatos valem mais que seus talentos",
      "ISSO É BUSSINESS BEBÊ KKKKKKK",
      "GUTHER TEM UM TDAH SINISTRO",
      "Sra. Kiki James Bond da Silva",
      "\"Te jogo do prédio\" - Isso não foi uma piada",
      "Mina mais virgem que azeite extra virgem",
      "Macaco desengonçado, não sabe dançar",
      "Encantado de chifres",
      "Cadê o baiano?",
      "Fixação científica",
      "Já ouvi dizer em premonição, mas a LOBA É FIA DA MÃE KKKKKK",
      "A filha do dono pode tudo meu fi",
      "Coisas que só acontecem em filme",
      "REFERÊNCIA DO CARAI SOBRE O PODEROSO CHEFÃO",
      "A CANTADA DOS GORDIN É OUTRO NÍVEL",
      "\"Mozinho, se e morrer e você não ficar amargurado assim igual esse leão, é papo da gente não ficar junto no pós-vida\"",
      "Foda-se caralho, isso é Rock N' Roll",
      "Calma cachorrinho branco, não quero que se aborreça",
      "01:39:45 - \"SENHOR CRYSTAL, EU TE AMO\"",
      "Nota da Mozinha: A loba é chata e as músicas não combinou"
    ]
  },

  {
    titulo: "Super Mario Galaxy: O Filme",
    tituloBusca: "The Super Mario Galaxy Movie",
    ano: 2026,
    posterUrl: "https://image.tmdb.org/t/p/w500/b3WeTp42eJSRuE4UZfyPCOJW4c.jpg",
    data: "2026-11-15",
    nota: 5,
    sinopse: "Depois de salvar o Reino dos Cogumelos, Mario e seus amigos partem numa missão intergaláctica para deter um novo vilão ameaçador.",
    piadas: [
      "Luigi é melhor",
      "Pedra de óculos",
      "Essa moto ter retrovisor é ofensa",
      "REFERÊNCIA ATÉ O CU FAZER BICO",
      "Novamente macaco bandido",
      "Mozinho: Eu teria matado o Bob",
      "Raposa de presença",
      "4 é par",
      "Estrelinha cabulosíssima"
    ]
  }

];

/* Não mexa nesta linha — ela disponibiliza os filmes pra página. */
if (typeof window !== "undefined") { window.FILMES = FILMES; }
