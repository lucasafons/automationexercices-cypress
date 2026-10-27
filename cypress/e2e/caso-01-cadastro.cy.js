const cadastro = require("../modules/cadastro");

describe("Cadastro de usuário", () => {
  it("A pessoa cria uma conta completa e confirma que ela foi excluída com sucesso", () => {
    const identificador = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const usuario = {
      nome: "Cypress Test User",
      email: `cypress-${identificador}@example.com`,
      senha: "CypressTest123!",
      diaNascimento: "10",
      mesNascimento: "May",
      anoNascimento: "1990",
      primeiroNome: "Cypress",
      sobrenome: "Test User",
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
    cadastro.excluirConta();
    cadastro.validarContaExcluida();
    cadastro.continuarAposExclusao();
  });
});