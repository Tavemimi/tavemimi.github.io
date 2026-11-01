# Nosso Acervo de Filmes 🎬❤️

Um álbum de lembranças dos filmes que o casal já assistiu junto. Cada filme vira
um card com pôster, nota em estrelinhas, data em que assistiram, sinopse curta e
as piadinhas internas de vocês. Toque (no celular) ou clique (no mouse) num card
pra ele virar e mostrar os detalhes.

Site estático — HTML, CSS e JavaScript puro. Nenhum build, nenhum servidor. Os
pôsteres são buscados automaticamente pelo título do filme, e você pode trocar
qualquer um por uma imagem própria quando quiser.

## Sumário

- [Como rodar](#como-rodar)
- [Como adicionar ou editar um filme](#como-adicionar-ou-editar-um-filme)
- [Os campos de cada filme](#os-campos-de-cada-filme)
- [Sobre o pôster automático](#sobre-o-pôster-automático)
- [Usar uma imagem própria](#usar-uma-imagem-própria)
- [Publicar as mudanças no site](#publicar-as-mudanças-no-site)
- [Arquivos do projeto](#arquivos-do-projeto)
- [Dúvidas rápidas](#dúvidas-rápidas)

## Como rodar

Abra o arquivo `index.html` no navegador — dois cliques e pronto. Para testar do
jeito mais parecido com o site publicado, use um servidor local simples (opcional):

```
npx serve
```

Isso abre o site num endereço tipo `http://localhost:3000`. Para parar, `Ctrl+C`.

> Os pôsteres automáticos precisam de internet. Uma imagem colocada na pasta
> `img/` funciona mesmo offline.

## Como adicionar ou editar um filme

Tudo acontece no arquivo **`filmes.js`** — é o único que você edita no dia a dia.

**Para adicionar:** copie um bloco `{ ... }` existente, cole no final da lista
(antes do `];`), preencha os campos e separe da entrada anterior com uma vírgula.

**Para editar:** ache o filme na lista e altere o campo que quiser (a data real,
a nota de verdade, as piadinhas de vocês).

```js
{
  titulo: "Nome do Filme",         // como vocês chamam (em português)
  tituloBusca: "Movie Name",       // nome em inglês/original (ajuda a achar o pôster)
  ano: 2024,
  posterUrl: "",                   // deixe "" para buscar o pôster automático
  data: "2026-03-10",              // data em que vocês assistiram (AAAA-MM-DD)
  nota: 4.5,                       // de 0 a 5 (aceita meia estrela)
  sinopse: "Uma sinopse bem curtinha do filme.",
  piadas: [
    "Primeira piadinha ou lembrança.",
    "Outra piadinha."
  ]
},
```

> As piadinhas que já vêm com `(exemplo)` no texto são só preenchimento.
> Troque pelas lembranças reais de vocês quando quiser.

## Os campos de cada filme

| Campo         | Obrigatório | O que é                                                        |
|---------------|-------------|----------------------------------------------------------------|
| `titulo`      | sim         | Nome do filme, em português.                                   |
| `tituloBusca` | não         | Nome em inglês/original — ajuda a encontrar o pôster certo.    |
| `imdbId`      | não         | Código do filme no IMDb (ex: `tt0910970`). Veja abaixo.        |
| `ano`         | sim         | Ano de lançamento.                                             |
| `posterUrl`   | não         | Imagem própria do pôster. Deixe `""` para buscar automático.   |
| `data`        | não         | Data em que assistiram, no formato `AAAA-MM-DD`.               |
| `nota`        | não         | Avaliação de 0 a 5 (aceita meia estrela, ex: `3.5`).           |
| `sinopse`     | sim         | Uma descrição curta do filme.                                  |
| `piadas`      | não         | Lista de piadinhas/lembranças. Deixe `[]` se não tiver.        |

## Sobre o pôster automático

Com `posterUrl: ""`, o site busca o pôster sozinho pelo título do filme. Como a
base de dados é em inglês, preencher o campo **`tituloBusca`** (nome original do
filme) faz o pôster certo aparecer com muito mais frequência.

Se mesmo assim vier o filme errado, use o campo **`imdbId`**: é o código do filme
no IMDb, que acha o pôster certinho sempre. Você encontra esse código na URL da
página do filme no site imdb.com (a parte que começa com `tt`):

```js
{
  titulo: "WALL-E",
  imdbId: "tt0910970",   // está na URL do filme no imdb.com
  ano: 2008,
  posterUrl: "",
  // ... resto dos campos
},
```

## Usar uma imagem própria

Se você preferir um pôster específico (ou uma foto de vocês, ou quiser que
funcione offline), salve a imagem na pasta **`img/`** e aponte o `posterUrl` para
ela:

```js
posterUrl: "img/meu-filme.jpg",
```

Dicas para a imagem:

- Use um nome simples, sem espaços nem acentos (ex: `meu-filme.jpg`).
- Formatos: `.jpg`, `.png` ou `.webp`.
- O ideal é um pôster "em pé" (proporção 2:3).

Quando `posterUrl` está preenchido, essa imagem tem prioridade e a busca
automática nem é feita para aquele filme. O campo também aceita um link direto de
imagem da internet.

## Publicar as mudanças no site

Depois de editar o `filmes.js` (ou qualquer arquivo), publique assim:

```
git add filmes.js
git commit -m "atualiza tal filme"
git push
```

Em um ou dois minutos o site publicado já mostra a mudança.

## Arquivos do projeto

| Arquivo      | Para que serve                                               |
|--------------|--------------------------------------------------------------|
| `index.html` | A página.                                                    |
| `style.css`  | O visual (galeria, cards, animação de virar).                |
| `app.js`     | A lógica (render, busca, ordenação, busca de pôster).        |
| `filmes.js`  | **Seus filmes.** O único arquivo que você edita sempre.      |
| `img/`       | Pôsteres próprios (opcional — só se quiser trocar algum).    |

## Dúvidas rápidas

**Um pôster não apareceu, e agora?**
Preencha o `tituloBusca` (nome em inglês) do filme, ou use o `imdbId`. Se quiser
garantir, baixe a imagem para a pasta `img/` e aponte o `posterUrl` para ela.

**Como mudo as cores/visual?**
No arquivo `style.css`, no começo, há um bloco `:root` com as cores do site. É só
alterar os valores ali.

**Posso ter um filme sem data ou sem nota?**
Pode. Deixe `data: ""` e `nota: 0` que o card continua funcionando normalmente.
