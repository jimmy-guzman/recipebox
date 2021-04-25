const { name } = require('./package.json')
const base = require('../../jest.config.base.js')

module.exports = {
  ...base,
  roots: ['<rootDir>/src'],
  name,
  displayName: name,
}
