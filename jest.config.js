const base = require('./jest.config.base.js')

module.exports = {
  projects: ['<rootDir>/{libs,apps}/*/jest.config.js'],
  ...base,
}
