module.exports = {
  // This is the "main" file which should include all other modules
  entry: './src/main.js',
  // Where should the compiled file go?
  output: {
    // To the `dist` folder
    path: './dist',
    // With the filename `build.js` so it's dist/build.js
    filename: 'build.js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: "pre",
        include: ['src'],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: ['src']
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
    ]
  }
}