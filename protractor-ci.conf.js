// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    browserName: 'chrome',
    'chromeOptions': {
      args: ['--test-type', '--headless']
    }
  },
  directConnect: false,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './e2e/tsconfig.e2e.json')
    });
    let jasmineReporters = require('jasmine-reporters');
    let junitReporter = new jasmineReporters.JUnitXmlReporter({
      savePath: 'test-results/',
      consolidateAll: false
    });
    jasmine.getEnv().addReporter(junitReporter);
  }
};
