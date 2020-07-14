var path = require('path');
var webpack = require('webpack');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');

// var { VueLoaderPlugin } = require('vue-loader')
// var nodeExternals = require('webpack-node-externals');
// var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = function (env) {
    return [

        // client 

        {
            mode: 'development',
            entry: {
                'morioh': ['./src/js/app.js', './src/scss/morioh.scss'],
                //'admin': './src/admin/app.js',          

            },
            output: {
                path: path.join(__dirname, './dist'),
                //filename: '[name].[hash:8].js',
                filename: 'js/[name].js',
                publicPath: '/',
                //chunkFilename: '[name]-chunk.js',
                //sourceMapFilename: '[name].map'
            },
            module: {
                rules: [

                    // {
                    //     test: /\.s?[ac]ss$/,
                    //     use: [
                    //         MiniCssExtractPlugin.loader,
                    //         'css-loader',
                    //         'sass-loader',
                    //         {
                    //             loader: 'postcss-loader',
                    //             options: {
                    //                 plugins: () => [require('autoprefixer')],
                    //             }
                    //         }
                    //     ],
                    // },

                    {
                        test: /\.s[ac]ss$/i,
                        use: [

                            //process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,

                            {
                                loader: MiniCssExtractPlugin.loader,
                                options: {
                                    hmr: process.env.NODE_ENV === 'development',
                                },
                            },
                            'css-loader',
                            'postcss-loader',
                            'sass-loader',

                            // {
                            //     loader: 'css-loader'
                            // },
                            // {
                            //     loader: 'postcss-loader'
                            // },
                            // {
                            //     loader: 'sass-loader'
                            // },


                        ]
                    }



                ]
            },



            devtool: '#source-map',

            plugins: [
                new webpack.DefinePlugin({
                    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development")
                }),

                new MiniCssExtractPlugin({
                    filename: process.env.NODE_ENV === 'development' ? 'css/[name].css' : 'css/[name].min.css',
                    allChunks: true
                }),
                new OptimizeCssAssetsPlugin(),

                new CopyWebpackPlugin([

                    {
                        context: 'src/preview',
                        from: '**/*.html',
                        // from: 'src/server/html/*.htm',
                        to: './preview'
                    }

                ]),



            ]






        },


    ]
}