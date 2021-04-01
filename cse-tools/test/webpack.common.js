const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const fs = require("fs");
const packageConfig = JSON.parse(
  fs.readFileSync("package.json", { encoding: "utf-8" })
);
if (!packageConfig.name) throw new Error("package.name should be specified!");

const fileLoaderOpt = {
  regExp: /src\/(.+)\/[^/]+\.[^/]+$/,
  name: "[1]/[name].[ext]",
};

module.exports = {
  entry: {
    bundle: "src/index.ts",
  },
  resolve: {
    modules: [path.resolve(__dirname), "node_modules"],
    extensions: [".ts", ".tsx", ".js"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env.PID": JSON.stringify(`${packageConfig.name}`),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          { loader: "babel-loader", options: { cacheDirectory: true } },
          { loader: "ts-loader" },
          { loader: "eslint-loader", options: { cache: true } },
        ],
      },
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
      {
        test: /\.(png|jp(e)?g|gif|ico|svg)$/i,
        use: [{ loader: "file-loader", options: fileLoaderOpt }],
      },
    ],
  },
  optimization: {
    moduleIds: "hashed",
  },
};
