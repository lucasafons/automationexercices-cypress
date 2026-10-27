const cadastro = require("../modules/cadastro");

describe("Login com credenciais inválidas", () => {
  it("A pessoa tenta entrar com credenciais incorretas e recebe a mensagem de erro", () => {
    cadastro.abrirHome();
    cadastro.validarHomeVisivel();
    cadastro.abrirFormularioCadastro();
    cadastro.validarFormularioLogin();
    cadastro.preencherCredenciais(
      `invalido-${Date.now()}@example.com`,
      "SenhaIncorreta123!",
    );
    cadastro.enviarLogin();
    cadastro.validarCredenciaisInvalidas();
  });
});