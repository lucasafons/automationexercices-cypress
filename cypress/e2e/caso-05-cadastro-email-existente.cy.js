const cadastro = require("../modules/cadastro");

describe("Cadastro com e-mail existente", () => {
  it("A pessoa tenta cadastrar um e-mail já registrado e recebe a mensagem de erro", () => {
    const usuario = cadastro.gerarDadosCadastro("email-existente");

    cadastro.abrirHome();
    cadastro.validarHomeVisivel();
    cadastro.abrirFormularioCadastro();
    cadastro.validarFormularioNovoCadastro();
    cadastro.cadastrarUsuario(usuario);
    cadastro.sair();
    cadastro.validarFormularioLogin();
    cadastro.validarFormularioNovoCadastro();
    cadastro.preencherIdentificacao(usuario);
    cadastro.enviarIdentificacao();
    cadastro.validarEmailJaCadastrado();
    cadastro.preencherCredenciais(usuario.email, usuario.senha);
    cadastro.enviarLogin();
    cadastro.validarUsuarioLogado(usuario.nome);
    cadastro.excluirConta();
    cadastro.validarContaExcluida();
    cadastro.continuarAposExclusao();
  });
});