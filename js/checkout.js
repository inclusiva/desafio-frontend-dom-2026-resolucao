// Sprint 3 — finalização simulada, sem pagamento.
const botaoFinalizar = document.querySelector(".checkout");
botaoFinalizar.addEventListener("click", function () {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio.");
    return;
  }

  const totalCompra = document.querySelector(".total").textContent;
  alert("Compra simulada com sucesso! Total: " + totalCompra);
  carrinho = [];
  salvarCarrinho();
  renderizarCarrinho();
  fecharCarrinho();
});
