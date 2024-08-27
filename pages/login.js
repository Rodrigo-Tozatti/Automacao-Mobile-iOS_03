const { I } = inject();

module.exports = {

  fields: {
    email: '~email',
    senha: '~senha'
  },

  buttons: {
    entrar: '~entrar'
  },

  menssager: {
    mensagemErro: '~lognFail'
  },

  //------------------------

  realizarLogin(email, senha) {
    // Preencher campo e-mail
    I.fillField(this.fields.email, email)
    // Preencher campo senha
    I.fillField(this.fields.senha, senha)

    // Clicar no botão 'Entrar'
    I.tap(this.buttons.entrar)
  },

  mensagemErro() {
    I.waitForElement(this.menssager.mensagemErro, 3)
    I.seeElement(this.menssager.mensagemErro);
  }
}
