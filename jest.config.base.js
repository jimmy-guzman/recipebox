module.exports = {
  cacheDirectory: '../../.cache/jest',
  coverageReporters: ['html', 'text'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  snapshotSerializers: ['@emotion/jest/serializer'],
  testRunner: 'jest-circus/runner',
  verbose: true,
}
