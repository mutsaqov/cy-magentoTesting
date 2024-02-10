const {defineConfig } = require("cypress")


module.exports = {
  e2e: {
   // supportFile: 'cypress/support/pageObjectModel',
    baseUrl:"https://magento.softwaretestingboard.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    defaultCommandTimeout: 6000,
    pageLoadTimeout: 30000,

  },
};
