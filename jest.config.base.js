module.exports = {
  cacheDirectory: '../../.cache/jest',
  coverageReporters: ['html', 'text'],
  snapshotSerializers: ['@emotion/jest/serializer'],
  testRunner: 'jest-circus/runner',
  verbose: true,
}
