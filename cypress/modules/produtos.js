const seletores = {
  linkProdutos: 'a[href="/products"]',
  tituloListaProdutos: "h2.title",
  produto: ".features_items .product-image-wrapper",
  linkVisualizarProduto: 'a[href^="/product_details/"]',
  informacoesProduto: ".product-information",
  nomeProduto: ".product-information h2",
  categoriaProduto: ".product-information p",
  precoProduto: ".product-information span span",
  disponibilidadeProduto: ".product-information p:nth-of-type(2)",
  condicaoProduto: ".product-information p:nth-of-type(3)",
  marcaProduto: ".product-information p:nth-of-type(4)",
};

function abrirListaProdutos() {
  cy.get(seletores.linkProdutos).click();
}

function abrirPrimeiroProduto() {
  cy.get(seletores.produto)
    .first()
    .find(seletores.linkVisualizarProduto)
    .click();
}

function validarListaProdutos() {
  cy.get(seletores.tituloListaProdutos)
    .should("be.visible")
    .and("contain.text", "All Products");
  cy.get(seletores.produto).should("have.length.greaterThan", 0);
}

function validarPaginaDetalhesProduto() {
  cy.location("pathname").should("match", /\/product_details\/\d+/);
  cy.get(seletores.informacoesProduto).should("be.visible");
  cy.get(seletores.nomeProduto).should("be.visible").and("not.be.empty");
  cy.get(seletores.categoriaProduto)
    .first()
    .should("be.visible")
    .and("contain.text", "Category:");
  cy.get(seletores.precoProduto).should("be.visible").and("contain.text", "Rs.");
  cy.get(seletores.disponibilidadeProduto)
    .should("be.visible")
    .and("contain.text", "Availability:");
  cy.get(seletores.condicaoProduto)
    .should("be.visible")
    .and("contain.text", "Condition:");
  cy.get(seletores.marcaProduto)
    .should("be.visible")
    .and("contain.text", "Brand:");
}

module.exports = {
  abrirListaProdutos,
  abrirPrimeiroProduto,
  validarListaProdutos,
  validarPaginaDetalhesProduto,
};