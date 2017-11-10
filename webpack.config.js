const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: "./entry.js",
  module: {
    rules: [
      {
        test: /(\.js)$/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname),
    filename: "bundle.js"
  },
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true,
      compress: {
        screw_ie8: true,
        warnings: false
      },
      output: { comments: false }
    })
  ]
};
