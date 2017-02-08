var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: './test.js',
  output: { path: path.join(__dirname,'public') , filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          "babel-loader"
        ]
      } ] },
  devServer: {
    contentBase: './public'
  }
}
// https://github.com/shimaore/atelier
