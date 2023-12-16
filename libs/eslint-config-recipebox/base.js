module.exports = {
  root: true,
  plugins: ['simple-import-sort', 'node-import'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
  rules: {
    // stylistic
    'object-shorthand': ['error', 'always'],
    'func-style': ['error', 'expression'],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'node-import/prefer-node-protocol': 'error',
    'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',

    // errors
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
  },
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'coverage/',
    'vite.config.ts.*.mjs',
    'storybook-static/',
  ],
};
