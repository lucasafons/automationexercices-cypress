const cadastro = require("../modules/cadastro");
const inscricao = require("../modules/inscricao");

describe("Inscrição no rodapé", () => {
  it("A pessoa informa o e-mail no rodapé e confirma a inscrição com sucesso", () => {
    const email = `cypress-subscription-${Date.now()}@example.com`;

    cadastro.abrirHome();
    cadastro.validarHomeVisivel();
    inscricao.validarRodapeInscricao();
    inscricao.preencherEmail(email);
    inscricao.enviarInscricao();
    inscricao.validarInscricaoConcluida();
  });
});