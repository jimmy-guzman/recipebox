const { name } = require('./package.json')
const base = require('../../jest.config.base.js')

module.exports = {
  ...base,
  displayName: name,
  name,
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
}
