const seletores = {
  logoHome: 'a[href="/"] img',
  linkCadastroLogin: 'a[href="/login"]',
  tituloNovoCadastro: 'div.signup-form h2',
  nomeCadastro: '[data-qa="signup-name"]',
  emailCadastro: '[data-qa="signup-email"]',
  botaoCadastro: '[data-qa="signup-button"]',
  tituloInformacoesConta: 'div.login-form h2',
  titulo: '#id_gender1',
  senha: '[data-qa="password"]',
  diaNascimento: '[data-qa="days"]',
  mesNascimento: '[data-qa="months"]',
  anoNascimento: '[data-qa="years"]',
  newsletter: '#newsletter',
  ofertas: '#optin',
  primeiroNome: '[data-qa="first_name"]',
  sobrenome: '[data-qa="last_name"]',
  empresa: '[data-qa="company"]',
  endereco: '[data-qa="address"]',
  complementoEndereco: '[data-qa="address2"]',
  pais: '[data-qa="country"]',
  estado: '[data-qa="state"]',
  cidade: '[data-qa="city"]',
  cep: '[data-qa="zipcode"]',
  celular: '[data-qa="mobile_number"]',
  botaoCriarConta: '[data-qa="create-account"]',
  contaCriada: '[data-qa="account-created"]',
  botaoContinuar: '[data-qa="continue-button"]',
  linkExcluirConta: 'a[href="/delete_account"]',
  contaExcluida: '[data-qa="account-deleted"]',
};

function abrirHome() {
  cy.visit("/");
}

function abrirFormularioCadastro() {
  cy.get(seletores.linkCadastroLogin).click();
}

function preencherIdentificacao(usuario) {
  cy.get(seletores.nomeCadastro).type(usuario.nome);
  cy.get(seletores.emailCadastro).type(usuario.email);
}

function enviarIdentificacao() {
  cy.get(seletores.botaoCadastro).click();
}

function preencherInformacoesConta(usuario) {
  cy.get(seletores.titulo).check();
  cy.get(seletores.senha).type(usuario.senha);
  cy.get(seletores.diaNascimento).select(usuario.diaNascimento);
  cy.get(seletores.mesNascimento).select(usuario.mesNascimento);
  cy.get(seletores.anoNascimento).select(usuario.anoNascimento);
  cy.get(seletores.newsletter).check();
  cy.get(seletores.ofertas).check();
  cy.get(seletores.primeiroNome).type(usuario.primeiroNome);
  cy.get(seletores.sobrenome).type(usuario.sobrenome);
  cy.get(seletores.empresa).type(usuario.empresa);
  cy.get(seletores.endereco).type(usuario.endereco);
  cy.get(seletores.complementoEndereco).type(usuario.complementoEndereco);
  cy.get(seletores.pais).select(usuario.pais);
  cy.get(seletores.estado).type(usuario.estado);
  cy.get(seletores.cidade).type(usuario.cidade);
  cy.get(seletores.cep).type(usuario.cep);
  cy.get(seletores.celular).type(usuario.celular);
}

function criarConta() {
  cy.get(seletores.botaoCriarConta).click();
}

function continuarAposCriacao() {
  cy.get(seletores.botaoContinuar).click();
}

function excluirConta() {
  cy.get(seletores.linkExcluirConta).click();
}

function continuarAposExclusao() {
  cy.get(seletores.botaoContinuar).click();
}

function validarHomeVisivel() {
  cy.get(seletores.logoHome).should("be.visible");
}

function validarFormularioNovoCadastro() {
  cy.get(seletores.tituloNovoCadastro)
    .should("be.visible")
    .and("contain.text", "New User Signup!");
}

function validarFormularioInformacoesConta() {
  cy.get(seletores.tituloInformacoesConta)
    .should("be.visible")
    .and("contain.text", "Enter Account Information");
}

function validarContaCriada() {
  cy.get(seletores.contaCriada)
    .should("be.visible")
    .and("contain.text", "Account Created!");
}

function validarUsuarioLogado(nome) {
  cy.contains("a", "Logged in as")
    .should("be.visible")
    .and("contain.text", nome);
}

function validarContaExcluida() {
  cy.get(seletores.contaExcluida)
    .should("be.visible")
    .and("contain.text", "Account Deleted!");
}

module.exports = {
  abrirHome,
  abrirFormularioCadastro,
  preencherIdentificacao,
  enviarIdentificacao,
  preencherInformacoesConta,
  criarConta,
  continuarAposCriacao,
  excluirConta,
  continuarAposExclusao,
  validarHomeVisivel,
  validarFormularioNovoCadastro,
  validarFormularioInformacoesConta,
  validarContaCriada,
  validarUsuarioLogado,
  validarContaExcluida,
};