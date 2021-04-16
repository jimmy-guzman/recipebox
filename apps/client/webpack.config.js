const { merge } = require('webpack-merge')

module.exports = merge(require('../../webpack.config'), {
  entry: './src/index.tsx',
})
