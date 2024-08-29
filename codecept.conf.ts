import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    Appium: {
      appiumV2: true,
      //url: 'http://127.0.0.1:4723/', // URL do servidor Appium
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
    I: './steps_file'
  },
  name: 'Automacao-Mobile-iOS'
}