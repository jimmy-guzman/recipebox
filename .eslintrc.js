const { resolve } = require('path')
const { readdirSync, lstatSync } = require('fs')

const PACKAGE_DIR = 'apps/'

const noExtraneousOverrides = readdirSync(resolve(__dirname, PACKAGE_DIR))
  // filter for non-hidden dirs to get a list of packages
  .filter((entry) => {
    return (
      entry.substr(0, 1) !== '.' &&
      lstatSync(resolve(__dirname, PACKAGE_DIR, entry)).isDirectory()
    )
  })
  // map to override rules pointing to local and root package.json for rule
  .map((entry) => ({
    files: [`${PACKAGE_DIR}${entry}/**/*`],
    rules: {
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: true,
          optionalDependencies: false,
          peerDependencies: false,
          packageDir: [__dirname, resolve(__dirname, PACKAGE_DIR, entry)],
        },
      ],
    },
  }))

module.exports = {
  extends: [
    '@comparto/eslint-config',
    'plugin:cypress/recommended',
    '@comparto/eslint-config/src/rules/typescript',
    '@comparto/eslint-config/src/rules/react',
  ],
  overrides: [...noExtraneousOverrides],
  parserOptions: {
    project: ['./tsconfig.json', './apps/*/tsconfig.json'],
  },
  plugins: ['cypress'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
}
