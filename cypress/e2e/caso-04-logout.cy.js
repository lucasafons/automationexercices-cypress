const cadastro = require("../modules/cadastro");

describe("Logout de usuário", () => {
  it("A pessoa encerra a sessão e é redirecionada para a página de login", () => {
    const usuario = cadastro.gerarDadosCadastro("logout");

    cadastro.abrirHome();
    cadastro.validarHomeVisivel();
    cadastro.abrirFormularioCadastro();
    cadastro.validarFormularioNovoCadastro();
    cadastro.cadastrarUsuario(usuario);
    cadastro.sair();
    cadastro.validarFormularioLogin();
    cadastro.preencherCredenciais(usuario.email, usuario.senha);
    cadastro.enviarLogin();
    cadastro.validarUsuarioLogado(usuario.nome);
    cadastro.excluirConta();
    cadastro.validarContaExcluida();
    cadastro.continuarAposExclusao();
  });
});