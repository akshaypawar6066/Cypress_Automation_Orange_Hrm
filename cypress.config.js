const { defineConfig } = require("cypress");


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'AutomationFrameworkReport_OrangeHrm',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  e2e: {
    setupNodeEvents(on, config) {

      //To Genearte Mochawsome report
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },

    env: {
      appUrl: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
      "username" : "Admin",
      "password" : "admin123"
        },
    screenshotOnRunFailure: true,
    experimentalRunAllSpecs: true,
    watchForFileChanges: false,
   // video: true,
    includeShadowDom: true,

    retries : {
      openMode : 0,
      runMode: 0
    }

  }
});
