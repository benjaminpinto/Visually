const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'ri8d5u',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://visual.ly/user/login',
  },
})
