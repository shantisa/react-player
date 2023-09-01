const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL || "http://localhost:3000",
    defaultCommandTimeout: 5000,
    video: true,
    screenshotsFolder: "src/test/cypress/screenshots",
    videosFolder: "src/test/cypress/videos",
    supportFile: "src/test/cypress/support/e2e.js",
    specPattern: "src/test/cypress/integration/*.spec.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
