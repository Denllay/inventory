const path = require('path');
const { default: merge } = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Base = require('./webpack.base');
module.exports = {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
  },
  plugins: [
    // Копирование
    new CopyPlugin({
      patterns: [{ from: './src', to: './static' }],
    }),
    // ХТМЛ
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public', 'index.html'),
    }),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
  },
};
