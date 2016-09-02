/* eslint-disable */

var webpack = require('webpack');

module.exports = {
  entry: {
    vendor: [
      'react',
      'react-dom'
    ]
  },
  output: {
    filename: 'vendor.js',
    path: __dirname + '/public/dist',
    library: 'vendor',
  },
  plugins: [
    new webpack.DllPlugin({
      name: 'vendor',
      path: __dirname + '/manifest.json'
    })
  ]
}
