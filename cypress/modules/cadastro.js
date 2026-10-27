const seletores = {
  logoHome: 'a[href="/"] img',
  linkCadastroLogin: 'a[href="/login"]',
  tituloLogin: 'div.login-form h2',
  emailLogin: '[data-qa="login-email"]',
  senhaLogin: '[data-qa="login-password"]',
  botaoLogin: '[data-qa="login-button"]',
  erroLogin: 'div.login-form form p',
  tituloNovoCadastro: 'div.signup-form h2',
  erroEmailExistente: 'div.signup-form form p',
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
  linkLogout: 'a[href="/logout"]',
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

function gerarDadosCadastro(prefixo) {
  const identificador = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

  return {
    nome: `Cypress ${prefixo} User`,
    email: `cypress-${prefixo}-${identificador}@example.com`,
    senha: "CypressTest123!",
    diaNascimento: "10",
    mesNascimento: "May",
    anoNascimento: "1990",
    primeiroNome: "Cypress",
    sobrenome: `${prefixo} User`,
    empresa: "Automation Tests",
    endereco: "100 Test Avenue",
    complementoEndereco: "Suite 10",
    pais: "United States",
    estado: "California",
    cidade: "Los Angeles",
    cep: "90001",
    celular: "1234567890",
  };
}

function preencherCredenciais(email, senha) {
  cy.get(seletores.emailLogin).type(email);
  cy.get(seletores.senhaLogin).type(senha);
}

function enviarLogin() {
  cy.get(seletores.botaoLogin).click();
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

function cadastrarUsuario(usuario) {
  preencherIdentificacao(usuario);
  enviarIdentificacao();
  validarFormularioInformacoesConta();
  preencherInformacoesConta(usuario);
  criarConta();
  validarContaCriada();
  continuarAposCriacao();
  validarUsuarioLogado(usuario.nome);
}

function continuarAposCriacao() {
  cy.get(seletores.botaoContinuar).click();
}

function excluirConta() {
  cy.get(seletores.linkExcluirConta).click();
}

function sair() {
  cy.get(seletores.linkLogout).click();
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

function validarEmailJaCadastrado() {
  cy.get(seletores.erroEmailExistente)
    .should("be.visible")
    .and("contain.text", "Email Address already exist!");
}

function validarFormularioLogin() {
  cy.get(seletores.tituloLogin)
    .should("be.visible")
    .and("contain.text", "Login to your account");
}

function validarCredenciaisInvalidas() {
  cy.get(seletores.erroLogin)
    .should("be.visible")
    .and("contain.text", "Your email or password is incorrect!");
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
  gerarDadosCadastro,
  preencherCredenciais,
  enviarLogin,
  preencherInformacoesConta,
  criarConta,
  cadastrarUsuario,
  continuarAposCriacao,
  sair,
  excluirConta,
  continuarAposExclusao,
  validarHomeVisivel,
  validarFormularioNovoCadastro,
  validarEmailJaCadastrado,
  validarFormularioLogin,
  validarCredenciaisInvalidas,
  validarFormularioInformacoesConta,
  validarContaCriada,
  validarUsuarioLogado,
  validarContaExcluida,
};