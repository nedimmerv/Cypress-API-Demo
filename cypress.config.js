const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },

    // implement node event listeners here
    baseUrl: "http://hx-fe-qa.uksouth.cloudapp.azure.com:8080",
    // baseUrl: "https://www.google.com",
  },
});
