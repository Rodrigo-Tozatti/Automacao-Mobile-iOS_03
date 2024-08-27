const { I } = inject();

module.exports = {

  button: {
    salvar: '~salvar',
  },

  //-----------

  validarBotao() {
    I.waitForElement(this.button.salvar, 3)
    I.seeElement(this.button.salvar)
  }
}
