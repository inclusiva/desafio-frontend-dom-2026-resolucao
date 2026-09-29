// Sprint 2: cada função cria uma parte do carrinho.
function criarMensagemCarrinhoVazio() {
  const mensagem = document.createElement("p");
  mensagem.classList.add("cart__empty");
  mensagem.textContent = "Seu carrinho está vazio.";
  return mensagem;
}

function criarCapaDoItem(livro) {
  const capa = document.createElement("div");
  capa.classList.add("cart-mini-cover");
  capa.classList.add("book-cover--" + livro.cor);

  const marca = document.createElement("b");
  marca.textContent = "p.42";

  capa.appendChild(marca);
  return capa;
}

function criarInformacoesDoItem(livro, item) {
  const informacoes = document.createElement("div");
  informacoes.classList.add("cart__product-info");

  const titulo = document.createElement("h3");
  titulo.textContent = livro.titulo;

  const quantidade = document.createElement("p");
  quantidade.textContent = "Quantidade: " + item.quantidade;

  const preco = document.createElement("strong");
  const valorDaLinha = livro.preco * item.quantidade;
  preco.textContent = formatarPreco(valorDaLinha);

  informacoes.appendChild(titulo);
  informacoes.appendChild(quantidade);
  informacoes.appendChild(preco);
  return informacoes;
}

function removerItemDoCarrinho(id) {
  carrinho = carrinho.filter(function (item) {
    return item.id !== id;
  });

  salvarCarrinho();
  renderizarCarrinho();
}

function criarBotaoRemover(id) {
  const botao = document.createElement("button");
  botao.classList.add("remove");
  botao.setAttribute("type", "button");
  botao.textContent = "Remover";

  // Sprint 3: cada botão conhece o ID de sua linha.
  botao.addEventListener("click", function () {
    removerItemDoCarrinho(id);
  });

  return botao;
}

function criarLinhaDoCarrinho(livro, item) {
  const linha = document.createElement("div");
  linha.classList.add("cart__product");

  const capa = criarCapaDoItem(livro);
  const informacoes = criarInformacoesDoItem(livro, item);
  const botaoRemover = criarBotaoRemover(item.id);

  linha.appendChild(capa);
  linha.appendChild(informacoes);
  linha.appendChild(botaoRemover);
  return linha;
}

function renderizarCarrinho() {
  const lista = document.querySelector(".cart__products");
  const totalNaTela = document.querySelector(".total");
  lista.textContent = "";
  let total = 0;

  if (carrinho.length === 0) {
    const mensagem = criarMensagemCarrinhoVazio();
    lista.appendChild(mensagem);
  }

  for (const item of carrinho) {
    const livro = dados.livros.find(function (livroDoCatalogo) {
      return livroDoCatalogo.id === item.id;
    });

    const linha = criarLinhaDoCarrinho(livro, item);
    lista.appendChild(linha);
    total = total + livro.preco * item.quantidade;
  }

  totalNaTela.textContent = formatarPreco(total);
}

function abrirCarrinho() {
  const painel = document.querySelector(".cart");
  const fundo = document.querySelector(".cart-backdrop");
  const botaoAbrir = document.querySelector(".cart-trigger");

  painel.classList.add("cart--active");
  fundo.classList.add("cart-backdrop--active");
  painel.setAttribute("aria-hidden", "false");
  botaoAbrir.setAttribute("aria-expanded", "true");
}

function fecharCarrinho() {
  const painel = document.querySelector(".cart");
  const fundo = document.querySelector(".cart-backdrop");
  const botaoAbrir = document.querySelector(".cart-trigger");

  painel.classList.remove("cart--active");
  fundo.classList.remove("cart-backdrop--active");
  painel.setAttribute("aria-hidden", "true");
  botaoAbrir.setAttribute("aria-expanded", "false");
}

// Os elementos fixos recebem eventos uma única vez.
const botaoAbrirCarrinho = document.querySelector(".cart-trigger");
const botaoFecharCarrinho = document.querySelector(".cart__close");
const fundoCarrinho = document.querySelector(".cart-backdrop");

botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
fundoCarrinho.addEventListener("click", fecharCarrinho);
