export default {
  default: {
paths: [
         'features/**/*.feature'
        ],

    import: [
      'features/support/**/*.js',
      'features/step-definitions/**/*.js',
      'features/hooks/**/*.js'
    ],

    format: [
      'progress',
      'allure-cucumberjs/reporter'
    ],

    formatOptions: {
      resultsDir: 'allure-results'
    },

    publishQuiet: true
  }
};