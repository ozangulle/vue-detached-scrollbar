var path = require('path');
var webpack = require('webpack');

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
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    library: 'vue-detached.scrollbar',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.vue', '.js', '.json'],
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}