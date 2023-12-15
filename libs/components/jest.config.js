const { name } = require('./package.json')
const base = require('../../jest.config.base')

module.exports = {
  ...base,
  roots: ['<rootDir>/src'],
  name,
  displayName: name,
}
