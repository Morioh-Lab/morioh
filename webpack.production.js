
var { CleanWebpackPlugin } = require('clean-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
// var  CleanWebpackPlugin  = require('clean-webpack-plugin');

module.exports = function () {

    var configs = require('./webpack.development.js')();

    for (let i = 0; i < configs.length; i++) {
        var config = configs[i];
        config.devtool = false;
        // config.plugins.push(new CleanWebpackPlugin());
        

    }


    return configs;
}