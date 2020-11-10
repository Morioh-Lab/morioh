
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = function () {

    var configs = require('./development.js')();

    configs.forEach(function (config) {
      
        config.devtool = false;
        config.mode = 'production';
        // if (config.target == "node") {
        //     config.plugins.push(new CleanWebpackPlugin());
        // };

        config.plugins.push(new OptimizeCssAssetsPlugin());

        // config.plugins.push(new CleanWebpackPlugin());
    });

    return configs;
}