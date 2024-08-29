Feature('login');

Scenario('Cenário 01 - Realizar login com sucesso',  ({ I }) => {
    I.fillField('~email', 'teste@teste.com')
    I.fillField('~senha', '123456')

    I.waitForElement('~entrar', 10);
    //I.tap('~entrar')
    I.doubleClick('~entrar');

    
});
