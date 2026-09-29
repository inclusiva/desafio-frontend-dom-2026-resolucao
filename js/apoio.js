// Apoio pronto: use estas funções nas atividades.
const chaveCarrinho = "pagina-42-carrinho";

function lerCarrinho() {
  const textoSalvo = localStorage.getItem(chaveCarrinho);
  if (textoSalvo === null) {
    return [];
  }
  return JSON.parse(textoSalvo);
}

let carrinho = lerCarrinho();

function salvarCarrinho() {
  const textoCarrinho = JSON.stringify(carrinho);
  localStorage.setItem(chaveCarrinho, textoCarrinho);
}

function formatarPreco(valorEmCentavos) {
  const centavos = valorEmCentavos % 100;
  const reais = (valorEmCentavos - centavos) / 100;
  let textoCentavos = "" + centavos;
  if (centavos < 10) {
    textoCentavos = "0" + centavos;
  }
  return "R$ " + reais + "," + textoCentavos;
}
