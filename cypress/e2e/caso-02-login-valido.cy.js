const cadastro = require("../modules/cadastro");

describe("Login com credenciais válidas", () => {
  it("A pessoa entra com uma conta recém-criada e confirma que ela foi excluída", () => {
    const identificador = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const usuario = {
      nome: "Cypress Login User",
      email: `cypress-login-${identificador}@example.com`,
      senha: "CypressLogin123!",
      diaNascimento: "10",
      mesNascimento: "May",
      anoNascimento: "1990",
      primeiroNome: "Cypress",
      sobrenome: "Login User",
      empresa: "Automation Tests",
      endereco: "100 Test Avenue",
      complementoEndereco: "Suite 10",
      pais: "United States",
      estado: "California",
      cidade: "Los Angeles",
      cep: "90001",
      celular: "1234567890",
    };

    cadastro.abrirHome();
    cadastro.validarHomeVisivel();
    cadastro.abrirFormularioCadastro();
    cadastro.validarFormularioNovoCadastro();
    cadastro.preencherIdentificacao(usuario);
    cadastro.enviarIdentificacao();
    cadastro.validarFormularioInformacoesConta();
    cadastro.preencherInformacoesConta(usuario);
    cadastro.criarConta();
    cadastro.validarContaCriada();
    cadastro.continuarAposCriacao();
    cadastro.validarUsuarioLogado(usuario.nome);
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