const produtos = require("../modules/produtos");
const cadastro = require("../modules/cadastro");

describe("Busca de produtos", () => {
  it("A pessoa pesquisa por um produto e visualiza os resultados encontrados", () => {
    const termo = "top";

    cadastro.abrirHome();
    cadastro.validarHomeVisivel();
    produtos.abrirListaProdutos();
    produtos.validarListaProdutos();
    produtos.buscarProduto(termo);
    produtos.validarResultadosBusca("Blue Top");
  });
});