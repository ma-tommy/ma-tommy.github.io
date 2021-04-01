const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    disableHostCheck: true,
    contentBase: "src/public",
    compress: true,
    https: true,
  },
  output: {
    filename: "[name].dev.js",
  },
});
