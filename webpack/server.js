var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
var CopyWebpackPlugin = require('copy-webpack-plugin');



module.exports = {

  target: 'node',
  devtool: 'source-map',
  entry: {

    'app': './src/server.js'

  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',

  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        //exclude: /node_modules/
      },
    ]
  },
  //externals: [/^(?!\.|\/).+/i,],
  externals: [nodeExternals()],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development") }
    }),

  ]
};