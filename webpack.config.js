/* eslint-disable */

var webpack = require('webpack');
var manifest = require('./manifest.json');

module.exports = {
  context: __dirname,
  entry: ['babel-polyfill', __dirname + '/ui/index.js'],
  output: {
    filename: 'index.js',
    path: __dirname + '/public/dist',
    publicPath: '/dist/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel?presets[]=es2015,presets[]=stage-0',
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel?presets[]=es2015,presets[]=stage-0,presets[]=react'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.DllReferencePlugin({ context: __dirname, manifest })
  ]
}
