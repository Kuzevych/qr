const path = require('path');
const webpack = require('webpack');

const defaultConfig = require('./default');

module.exports = {
  ...defaultConfig,
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, '../dist'),
      serveIndex: true,
    },
    compress: true,
    historyApiFallback: true,
    https: false,
    open: true,
    hot: true,
    port: 4200,
    host: 'localhost',
    devMiddleware: {
      writeToDisk: true,
    },
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      ...defaultConfig.module.rules,
    ],
  },
  plugins: [
    ...defaultConfig.plugins,
    new webpack.HotModuleReplacementPlugin(),
  ]
};