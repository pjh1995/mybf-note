const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  name: "My Best Friend Note - setting",
  mode: "development", // 실서비스: production
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"],
  },

  entry: {
    app: ["./src/index"],
  }, // 입력
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "bundle.js",
    publicPath: "/",
  }, // 출력
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
