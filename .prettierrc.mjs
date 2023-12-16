/** @type {import("prettier").Options} */
export default {
  $schema: 'http://json.schemastore.org/prettierrc',
  semi: true,
  singleQuote: true,
  printWidth: 80,
  jsxSingleQuote: true,
  arrowParens: 'always',
  trailingComma: 'all',
  quoteProps: 'consistent',
  overrides: [
    {
      files: 'pnpm-lock.yaml',
      options: {
        rangeEnd: 0,
      },
    },
  ],
};
