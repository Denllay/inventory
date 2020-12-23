const path = require("path");
const { default: merge } = require("webpack-merge");
const Base = require("./webpack.base");
module.exports = merge(Base, {
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "./dist"),
    port: 8080,
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist"),
  },
});
