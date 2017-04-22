module.exports = {
  devtool: 'source-map',
  // because everything get's bundled into a bundle.js file, finding errors or console.logs is difficult, source-map maintains the files and the lines that the errors started from.
  //don't put a source-map in production
  entry: "./entry.js",
  output: {
    path: __dirname + "/client/js",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
          //test says only apply these rules to these files .js$ the $ means that is the end.
          //apply this loader to those file types which changes ES6 to ES5
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'//this reads right to left.
      },
      {
        test: /\.svg/,
        loader: 'svg-url-loader'
      }
  ]
  }
};
