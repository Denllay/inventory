const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "./dist"),
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.bundle\.ts$/,
        use: {
          loader: "bundle-loader",
          options: {
            name: "[name]",
          },
        },
      },
      // Тупескрипт
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      // Картинки
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      // Шрифты
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
      // Сксс
      {
        test: /\.scss|\.sass$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              sassOptions: {
                outputStyle: "compressed",
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    // Копирование
    new CopyPlugin({
      patterns: [{ from: "./src", to: "./static" }],
    }),
    // ХТМЛ
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./src", "index.html"),
    }),
    // Очистка говна
    new CleanWebpackPlugin(),
  ],
};
