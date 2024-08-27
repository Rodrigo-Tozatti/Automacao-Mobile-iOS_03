const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  name: 'automation_appium',
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      appiumV2: true,
      url: 'http://192.168.122.106:4723/', // URL do servidor Appium
      app: '/Users/rodrigorossetitozatti/Repositorio-Mac/Automacao-Mobile-iOS/app/qazandoapp.app',
      desiredCapabilities: {
        platformName: 'iOS',
        platformVersion: '16.2', // Versão do sistema oper
        deviceName: 'iPhone 14 Pro Max', // Nome do dispositivo
        automationName: 'XcUiTest',
      },
      path: '/'
    }
  },
  include: {
    I: './steps_file.js', // Local do arquivo de etapas
    loginPage: "./pages/login.js",
    paginaInicialPage: "./pages/paginaInicial.js",
  },
};