const { resolve } = require('node:path');

const cwd = process.cwd();
const project = [
  resolve(cwd, 'tsconfig.json'),
  resolve(cwd, 'tsconfig.node.json'),
];

module.exports = {
  extends: ['./base.js'],
  env: { node: true, es2020: true },
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module', project },
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
        'plugin:jest/recommended',
        'plugin:jest/style',
        'plugin:jest-dom/recommended',
      ],
      rules: { 'jest/no-deprecated-functions': 'off' },
    },
  ],
};
