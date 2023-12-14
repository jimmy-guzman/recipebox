const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const CircularDependencyPlugin = require('circular-dependency-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { merge } = require('webpack-merge')
const { mode, env } = require('webpack-nano/argv')

const dev = {
  devServer: {
    historyApiFallback: true,
    hot: true,
    stats: 'minimal',
  },
  devtool: 'eval-cheap-source-map',
}

const prod = {
  plugins: [
    new CleanWebpackPlugin(),
    ...(env === 'plugins:analyze' ? [new BundleAnalyzerPlugin()] : []),
  ],
}

const base = {
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            rootMode: 'upward',
          },
        },
      },
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader', options: { minimize: true } }],
      },
      {
        test: /\.(png|jpe?g|svg)/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: './img/[name].[ext]',
              limit: 10000,
            },
          },
          {
            loader: 'img-loader',
          },
        ],
      },
      {
        test: /\.s?css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
  optimization: {
    runtimeChunk: {
      name: (entrypoint) => `runtime-${entrypoint.name}`,
    },
    splitChunks: { chunks: 'all', name: false },
  },
  output: {
    publicPath: '/',
  },
  plugins: [
    new ESLintPlugin({ extensions: ['.js', '.ts', '.jsx', '.tsx'] }),
    new HtmlWebPackPlugin({
      template: 'src/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new CircularDependencyPlugin({
      failOnError: false,
      cwd: process.cwd(),
      exclude: /node_modules/,
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
  },
  stats: 'errors-warnings',
}

const getConfig = (mode_) => {
  process.env.NODE_ENV = mode_

  if (mode_ === 'production') {
    return merge(base, prod)
  }

  if (mode_ === 'development') {
    return merge(base, dev)
  }

  return merge(base, dev)
}

module.exports = getConfig(mode)
