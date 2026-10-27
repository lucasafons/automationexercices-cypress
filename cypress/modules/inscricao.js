const seletores = {
  rodape: "footer",
  tituloInscricao: "footer h2",
  campoEmail: "#susbscribe_email",
  botaoInscrever: "#subscribe",
  mensagemSucesso: ".alert-success",
};

function preencherEmail(email) {
  cy.get(seletores.campoEmail).type(email);
}

function enviarInscricao() {
  cy.get(seletores.botaoInscrever).click();
}

function validarRodapeInscricao() {
  cy.get(seletores.rodape).scrollIntoView();
  cy.get(seletores.tituloInscricao)
    .should("be.visible")
    .and("contain.text", "Subscription");
}

function validarInscricaoConcluida() {
  cy.get(seletores.mensagemSucesso)
    .should("be.visible")
    .and("contain.text", "You have been successfully subscribed!");
}

module.exports = {
  preencherEmail,
  enviarInscricao,
  validarRodapeInscricao,
  validarInscricaoConcluida,
};