// Sprint 1: o ID da URL indica qual livro mostrar.
function buscarLivroDaUrl() {
  const buscaDaUrl = window.location.search;
  const parametros = new URLSearchParams(buscaDaUrl);
  const idDoLivro = parametros.get("id");

  return dados.livros.find(function (livro) {
    return livro.id === idDoLivro;
  });
}

function criarAvisoLivroNaoEncontrado() {
  const aviso = document.createElement("div");
  aviso.classList.add("book-not-found");

  const titulo = document.createElement("h1");
  titulo.textContent = "Livro não encontrado.";

  const link = document.createElement("a");
  link.setAttribute("href", "./index.html#catalogo");
  link.textContent = "Voltar ao catálogo";

  aviso.appendChild(titulo);
  aviso.appendChild(link);
  return aviso;
}

function criarCapaDosDetalhes(livro) {
  const capa = document.createElement("div");
  capa.classList.add("book-detail__cover");
  capa.classList.add("book-cover");
  capa.classList.add("book-cover--" + livro.cor);

  const titulo = document.createElement("h1");
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

function adicionarLivroAoCarrinho(livro) {
  const itemExistente = carrinho.find(function (item) {
    return item.id === livro.id;
  });

  if (itemExistente) {
    itemExistente.quantidade = itemExistente.quantidade + 1;
  } else {
    carrinho.push({ id: livro.id, quantidade: 1 });
  }

  salvarCarrinho();
  renderizarCarrinho();
  abrirCarrinho();
}

function criarBotaoDeCompra(livro) {
  const botao = document.createElement("button");
  botao.classList.add("book-detail__add");
  botao.setAttribute("type", "button");
  botao.textContent = "Adicionar ao carrinho";

  botao.addEventListener("click", function () {
    adicionarLivroAoCarrinho(livro);
  });

  return botao;
}

function criarConteudoDosDetalhes(livro) {
  const conteudo = document.createElement("div");
  conteudo.classList.add("book-detail__content");

  const titulo = document.createElement("h2");
  titulo.textContent = livro.titulo;

  const autor = document.createElement("p");
  autor.classList.add("book-detail__author");
  autor.textContent = "por " + livro.autor;

  const preco = document.createElement("strong");
  preco.classList.add("book-detail__price");
  preco.textContent = formatarPreco(livro.preco);

  const descricao = document.createElement("p");
  descricao.classList.add("book-detail__description");
  descricao.textContent = livro.descricao;

  const compra = document.createElement("div");
  compra.classList.add("book-detail__buy");

  const botao = criarBotaoDeCompra(livro);
  compra.appendChild(botao);

  conteudo.appendChild(titulo);
  conteudo.appendChild(autor);
  conteudo.appendChild(preco);
  conteudo.appendChild(descricao);
  conteudo.appendChild(compra);
  return conteudo;
}

function renderizarDetalhes() {
  const area = document.querySelector(".book-detail");
  const livro = buscarLivroDaUrl();
  area.textContent = "";

  if (!livro) {
    const aviso = criarAvisoLivroNaoEncontrado();
    area.appendChild(aviso);
    return;
  }

  const capa = criarCapaDosDetalhes(livro);
  const conteudo = criarConteudoDosDetalhes(livro);
  area.appendChild(capa);
  area.appendChild(conteudo);
}

renderizarDetalhes();
// O carrinho permanece acessível mesmo se o ID da URL for inválido.
renderizarCarrinho();
