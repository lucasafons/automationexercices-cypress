const seletores = {
  linkProdutos: 'a[href="/products"]',
  produto: ".features_items .product-image-wrapper",
  adicionarCarrinho: ".add-to-cart",
  modalCarrinho: "#cartModal",
  itemCarrinho: "#cart_info_table tbody tr",
  botaoCheckout: "a.check_out",
  enderecoEntrega: "#address_delivery",
  enderecoFaturamento: "#address_invoice",
  campoComentario: 'textarea[name="message"]',
  botaoFazerPedido: 'a[href="/payment"]',
  titularCartao: '[data-qa="name-on-card"]',
  numeroCartao: '[data-qa="card-number"]',
  cvc: '[data-qa="cvc"]',
  mesValidade: '[data-qa="expiry-month"]',
  anoValidade: '[data-qa="expiry-year"]',
  botaoConfirmarPagamento: '[data-qa="pay-button"]',
  pedidoConcluido: '[data-qa="order-placed"]',
};

function adicionarPrimeiroProduto() {
  cy.get(seletores.linkProdutos).click();
  cy.get(seletores.produto)
    .first()
    .within(() => {
      cy.get(seletores.adicionarCarrinho).first().click();
    });
}

function abrirCarrinho() {
  cy.get(seletores.modalCarrinho).should("be.visible").contains("a", "View Cart").click();
}

function prosseguirParaCheckout() {
  cy.get(seletores.botaoCheckout).click();
}

function preencherComentario(comentario) {
  cy.get(seletores.campoComentario).type(comentario);
}

function abrirPagamento() {
  cy.get(seletores.botaoFazerPedido).click();
}

function preencherDadosPagamento(pagamento) {
  cy.get(seletores.titularCartao).type(pagamento.titular);
  cy.get(seletores.numeroCartao).type(pagamento.numero);
  cy.get(seletores.cvc).type(pagamento.cvc);
  cy.get(seletores.mesValidade).type(pagamento.mes);
  cy.get(seletores.anoValidade).type(pagamento.ano);
}

function confirmarPagamento() {
  cy.get(seletores.botaoConfirmarPagamento).click();
}

function validarProdutoNoCarrinho() {
  cy.location("pathname").should("eq", "/view_cart");
  cy.get(seletores.itemCarrinho).should("have.length.greaterThan", 0);
}

function validarEnderecoERevisao(usuario) {
  cy.location("pathname").should("eq", "/checkout");
  cy.contains("h2", "Address Details").should("be.visible");
  cy.contains("h2", "Review Your Order").should("be.visible");
  cy.get(seletores.enderecoEntrega)
    .should("contain.text", usuario.primeiroNome)
    .and("contain.text", usuario.endereco);
  cy.get(seletores.enderecoFaturamento)
    .should("contain.text", usuario.primeiroNome)
    .and("contain.text", usuario.endereco);
  cy.contains("Blue Top").should("be.visible");
}

function validarPedidoConcluido() {
  cy.get(seletores.pedidoConcluido)
    .should("be.visible")
    .and("contain.text", "Order Placed!");
  cy.contains("p", "Congratulations! Your order has been confirmed!").should("be.visible");
}

module.exports = {
  adicionarPrimeiroProduto,
  abrirCarrinho,
  prosseguirParaCheckout,
  preencherComentario,
  abrirPagamento,
  preencherDadosPagamento,
  confirmarPagamento,
  validarProdutoNoCarrinho,
  validarEnderecoERevisao,
  validarPedidoConcluido,
};