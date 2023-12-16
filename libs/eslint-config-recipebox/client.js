const { resolve } = require('node:path');

const cwd = process.cwd();
const project = [
  resolve(cwd, 'tsconfig.json'),
  resolve(cwd, 'tsconfig.node.json'),
];

module.exports = {
  extends: ['./base.js', 'plugin:react-hooks/recommended'],
  env: { browser: true, es2020: true },
  globals: { JSX: true },
  plugins: ['react-refresh'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module', project },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  overrides: [
    {
      env: {
        node: true,
      },
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
      files: ['./**/*.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      plugins: ['jest'],
      extends: [
        'plugin:testing-library/react',
        'plugin:jest/recommended',
        'plugin:jest/style',
        'plugin:jest-dom/recommended',
      ],
      rules: { 'jest/no-deprecated-functions': 'off' },
    },
    {
      files: ['**/e2e/**/*.[jt]s?(x)'],
      rules: {
        'jest/no-done-callback': 'off',
        'jest/require-hook': 'off',
        'testing-library/prefer-screen-queries': 'off',
      },
    },
  ],
};
