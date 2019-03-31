const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: './src/index.js',
  externals: {
    "Vue": {
      commonjs: "vue",
      commonjs2: "vue",
      amd: "vue",
      root: "Vue"
    }
  },
  plugins: [new VueLoaderPlugin()],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    library: 'vue-detached-scrollbar',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.vue', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader'
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader",
          options: { presets: ['@babel/preset-env'] },
        }]
      }
    ]
  }
}