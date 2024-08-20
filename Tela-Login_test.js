Feature('CT001 - Login na plataforma');

Scenario('Cenário 01 - Realizar login com sucesso',  ({ I }) => {
    // Preencher campo e-mail
    I.fillField('~email', 'teste@teste.com')
    // Preencher campo senha
    I.fillField('XCUIElementTypeSecureTextField', '123456')
    // Clicar no botão 'Entrar'
    I.click('//XCUIElementTypeOther[@name="entrar"]');

    // Validar tela de entrada
    I.waitForElement('~salvar', 3)
    I.seeElement('~salvar');

});
