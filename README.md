# Nosso Acervo de Filmes 🎬❤️

Um álbum de lembranças dos filmes que o casal já assistiu junto. Cada filme vira
um card com pôster, nota em estrelinhas, data em que assistiram, sinopse curta e
as piadinhas internas de vocês. Toque (celular) ou clique (mouse) no card pra ele
virar e mostrar os detalhes.

Site estático — HTML, CSS e JavaScript puro. Nenhum build, nenhum servidor. Os
pôsteres são buscados automaticamente pelo título na API gratuita OMDb, e você
pode sobrescrever qualquer um com uma imagem própria quando quiser.

## Como rodar

Só abrir o arquivo `index.html` no navegador. Dois cliques e pronto.

> Os pôsteres automáticos precisam de internet (a busca é feita na API OMDb).
> Uma imagem que você coloque manualmente na pasta `img/` funciona offline.

## Como adicionar um filme

Abra o arquivo **`filmes.js`** e copie um bloco, preenchendo os campos:

```js
{
  titulo: "Nome do Filme",         // como vocês chamam (em português)
  tituloBusca: "Movie Name",       // nome em inglês/original (ajuda a achar o pôster)
  ano: 2024,
  posterUrl: "",                   // deixe "" para buscar o pôster automático
  data: "2026-03-10",              // data em que vocês assistiram (AAAA-MM-DD)
  nota: 4.5,                       // de 0 a 5 (aceita meia estrela: 3.5, 4.5...)
  sinopse: "Uma sinopse bem curtinha do filme.",
  piadas: [
    "Primeira piadinha ou lembrança.",
    "Outra piadinha."
  ]
},
```

Lembre de separar cada filme com vírgula. É o único arquivo que você edita no dia
a dia.

### Sobre o pôster automático

Com `posterUrl: ""`, o site busca o pôster sozinho na API OMDb pelo título. Como
essa base é em inglês, o campo **`tituloBusca`** (nome original do filme) ajuda a
achar o pôster certo.

Se mesmo assim a busca trouxer o filme errado, use o campo **`imdbId`** — é o
código do filme no IMDb, que acha o pôster certinho sempre:

```js
{
  titulo: "WALL-E",
  imdbId: "tt0910970",   // você acha esse código na URL do filme no site imdb.com
  ano: 2008,
  posterUrl: "",
  // ... resto dos campos
},
```

### Usar uma imagem própria (opcional)

Se você preferir uma imagem específica (ou quiser que funcione offline), salve a
foto na pasta **`img/`** e aponte o `posterUrl` pra ela:

```js
posterUrl: "img/meu-filme.jpg",
```

Quando `posterUrl` está preenchido, essa imagem tem prioridade e a API nem é
consultada. Também aceita um link direto de imagem da internet.

## A chave da API

A chave da OMDb já está configurada no arquivo `app.js`:

```js
const OMDB_API_KEY = "12e8652b";
```

É uma chave gratuita (limite de 1000 buscas por dia, mais que suficiente). Como o
repositório é público, essa chave fica visível — para a OMDb isso é de baixo
risco, mas se um dia quiser trocar, pegue outra em
https://www.omdbapi.com/apikey.aspx e substitua o texto acima.

## Publicar no GitHub Pages

Como seu portfólio já roda no GitHub Pages, é só colocar esta pasta no repositório
(por exemplo em `projects/acervo-filmes/`) e acessar pela URL do Pages. Por ser
100% estático, não precisa de nenhuma configuração extra.

## Arquivos

| Arquivo      | Para que serve                                            |
|--------------|-----------------------------------------------------------|
| `index.html` | A página.                                                 |
| `style.css`  | O visual (galeria, cards, animação de virar).             |
| `app.js`     | A lógica (render, busca, ordenação, busca de pôster).     |
| `filmes.js`  | **Seus filmes.** O único arquivo que você edita sempre.   |
| `img/`       | Pôsteres próprios (opcional — só se quiser sobrescrever). |
