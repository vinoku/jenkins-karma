// Karma configuration file for CI.

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-junit-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    reporters: ['junit'],
    junitReporter: {
      outputDir: 'test-results',
      outputFile: 'karma-results.xml'
    },
    angularCli: {
      environment: 'dev',
    },
    port: 9876,
    logLevel: config.LOG_INFO,
    browsers: ['ChromeHeadless'],
    autoWatch: false,
    singleRun: true
  });
};
