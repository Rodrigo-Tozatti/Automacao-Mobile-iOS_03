const { mensagemErro } = require("./pages/login");

const { loginPage, I } = inject();

Feature('CT001 - Login na plataforma');

Scenario('Cenário 01 - Realizar login com sucesso', ({ paginaInicialPage }) => {

    loginPage.realizarLogin('teste@teste.com', '123456')
    paginaInicialPage.validarBotao()

    // Validar tela de entrada
    I.waitForElement('~salvar', 3)
    I.seeElement('~salvar');
});

Scenario('Cenário 02 - Validar mensagem de erro para e-mail errado', ({ }) => {

    loginPage.realizarLogin('teste123@teste.com', '123456')

    // Validar tela de entrada
    loginPage.mensagemErro()
});