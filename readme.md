# Resolução — Livraria Página 42

Abra `index.html` com o Live Server. Esta pasta contém a implementação das três sprints do desafio, com duas páginas, scripts comuns e carrinho salvo no navegador.

- `js/index.js`: cards e links com ID.
- `js/product.js`: detalhes pela URL e adição de uma unidade por clique.
- `js/cart.js`: painel, lista, total e remoção.
- `js/checkout.js`: finalização simulada.
- `js/apoio.js`: persistência e formatação de preços.

As funções `criar...` montam os componentes; `renderizarCatalogo`, `renderizarDetalhes` e `renderizarCarrinho` chamam essas funções e inserem o resultado na página. Os comentários identificam as sprints correspondentes. A resolução usa a mesma chave de armazenamento da base; quando abertas no mesmo endereço e porta, ambas leem o mesmo carrinho.
