const produtos = require("../modules/produtos");
const cadastro = require("../modules/cadastro");

describe("Lista e detalhes de produtos", () => {
  it("A pessoa abre o primeiro produto e confirma que seus detalhes estão visíveis", () => {
    cadastro.abrirHome();
    cadastro.validarHomeVisivel();
    produtos.abrirListaProdutos();
    produtos.validarListaProdutos();
    produtos.abrirPrimeiroProduto();
    produtos.validarPaginaDetalhesProduto();
  });
});