const cadastro = require("../modules/cadastro");
const checkout = require("../modules/checkout");

describe("Pedido com cadastro antes do checkout", () => {
  it("A pessoa cria uma conta, finaliza um pedido e confirma a exclusão da conta", () => {
    const usuario = cadastro.gerarDadosCadastro("pedido-15");
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