const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Base = require("./webpack.base");
const { default: merge } = require("webpack-merge");
module.exports = merge(Base, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "./src", "index.html"),
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", //2. Turns css into commonjs
          "sass-loader", //1. Turns sass into css
        ],
      },
    ],
  },
});
