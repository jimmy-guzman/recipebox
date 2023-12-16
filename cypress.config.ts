import { defineConfig } from 'cypress'

export default defineConfig({
  videosFolder: './.reports/cypress/videos',
  screenshotsFolder: './.reports/cypress/screenshots',
  e2e: {
    baseUrl: 'http://localhost:5173/',
  },
})
