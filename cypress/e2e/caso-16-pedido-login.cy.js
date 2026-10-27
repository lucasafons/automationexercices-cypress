const cadastro = require("../modules/cadastro");
const checkout = require("../modules/checkout");

describe("Pedido com login antes do checkout", () => {
  it("A pessoa entra com uma conta própria, finaliza o pedido e confirma sua exclusão", () => {
    const usuario = cadastro.gerarDadosCadastro("pedido-16");
    const pagamento = {
      titular: `${usuario.primeiroNome} ${usuario.sobrenome}`,
      numero: "4111111111111111",
      cvc: "123",
      mes: "12",
      ano: "2030",
    };

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
    checkout.adicionarPrimeiroProduto();
    checkout.abrirCarrinho();
    checkout.validarProdutoNoCarrinho();
    checkout.prosseguirParaCheckout();
    checkout.validarEnderecoERevisao(usuario);
    checkout.preencherComentario("Pedido de teste automatizado");
    checkout.abrirPagamento();
    checkout.preencherDadosPagamento(pagamento);
    checkout.confirmarPagamento();
    checkout.validarPedidoConcluido();
    cadastro.excluirConta();
    cadastro.validarContaExcluida();
    cadastro.continuarAposExclusao();
  });
});