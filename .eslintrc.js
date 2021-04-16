module.exports = {
  extends: ['@comparto/eslint-config', 'plugin:cypress/recommended'],
  plugins: ['cypress'],
  overrides: [
    {
      files: ['./apps/*/*.config.js'],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: true, packageDir: __dirname },
        ],
      },
    },
  ],
}
