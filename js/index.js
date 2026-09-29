// Sprint 1: cada função cria uma parte do card.
function criarCapaDoCard(livro) {
  const capa = document.createElement("div");
  capa.classList.add("book-cover");
  capa.classList.add("book-cover--" + livro.cor);

  const titulo = document.createElement("h3");
  titulo.textContent = livro.titulo;

  const autor = document.createElement("small");
  autor.textContent = livro.autor;

  const marca = document.createElement("b");
  marca.textContent = "p.42";

  capa.appendChild(titulo);
  capa.appendChild(autor);
  capa.appendChild(marca);
  return capa;
}

function criarInformacoesDoCard(livro) {
  const informacoes = document.createElement("div");
  informacoes.classList.add("book-card__details");

  const titulo = document.createElement("h3");
  titulo.textContent = livro.titulo;

  const autor = document.createElement("span");
  autor.textContent = livro.autor;

  const acoes = document.createElement("div");

  const preco = document.createElement("strong");
  preco.textContent = formatarPreco(livro.preco);

  const link = document.createElement("a");
  link.setAttribute("href", "./product.html?id=" + livro.id);
  link.textContent = "Ver detalhes";

  acoes.appendChild(preco);
  acoes.appendChild(link);
  informacoes.appendChild(titulo);
  informacoes.appendChild(autor);
  informacoes.appendChild(acoes);
  return informacoes;
}

function criarCardDoLivro(livro) {
  const card = document.createElement("article");
  card.classList.add("book-card");

  const capa = criarCapaDoCard(livro);
  const informacoes = criarInformacoesDoCard(livro);

  card.appendChild(capa);
  card.appendChild(informacoes);
  return card;
}

function renderizarCatalogo() {
  const lista = document.querySelector(".products__list");
  lista.textContent = "";

  for (const livro of dados.livros) {
    const card = criarCardDoLivro(livro);
    lista.appendChild(card);
  }
}

renderizarCatalogo();
renderizarCarrinho();
