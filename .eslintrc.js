const { resolve } = require('path')
const { readdirSync, lstatSync } = require('fs')

const noExtraneousOverrides = (pkgDir) => {
  return (
    readdirSync(resolve(__dirname, pkgDir))
      // filter for non-hidden dirs to get a list of packages
      .filter((entry) => {
        return (
          entry.substr(0, 1) !== '.' &&
          lstatSync(resolve(__dirname, pkgDir, entry)).isDirectory()
        )
      })
      .map((entry) => {
        return {
          files: [`${pkgDir}${entry}/**/*`],
          rules: {
            'import/no-extraneous-dependencies': [
              'error',
              {
                devDependencies: true,
                optionalDependencies: false,
                peerDependencies: false,
                packageDir: [__dirname, resolve(__dirname, pkgDir, entry)],
              },
            ],
          },
        }
      })
  )
}

module.exports = {
  extends: [
    '@comparto/eslint-config',
    'plugin:cypress/recommended',
    '@comparto/eslint-config/src/rules/typescript',
    '@comparto/eslint-config/src/rules/react',
    '@comparto/eslint-config/src/rules/jest',
  ],
  overrides: [
    ...noExtraneousOverrides('apps/'),
    ...noExtraneousOverrides('libs/'),
  ],
  parserOptions: {
    project: [
      './tsconfig.json',
      './tsconfig.node.json',
      './apps/*/tsconfig.json',
      './apps/*/tsconfig.node.json',
    ],
  },
  plugins: ['cypress'],
  rules: {
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'jest/no-deprecated-functions': 'off',
  },
}
