var path = require('path');
var webpack = require('webpack');
var { VueLoaderPlugin } = require('vue-loader');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {  
    mode: 'development',
    // devtool: 'source-map$',
    entry: {
        'morioh': ['./src/index.js', './src/morioh.scss']             

    },
    externals: {
      vue: 'Vue'
    },
    output: {
        path: path.join(__dirname, '../dist'),
        //filename: '[name].[hash:8].js',
        filename: process.env.NODE_ENV === 'development' ? 'js/[name].js' : 'js/[name].min.js',
        publicPath: process.env.BASE_URL || '/',
        libraryTarget: 'umd',
        //chunkFilename: '[name]-chunk.js',
        //sourceMapFilename: '[name].map'
    },
    module: {
        rules: [


             
            {
              test: /\.js$/,
              loader: 'babel-loader'
            },
           
            {
              test: /\.vue$/,
              loader: 'vue-loader',
              options: {
                loaders: {
                  //presets: ['es2015', "stage-2"],
                  // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                  // the "scss" and "sass" values for the lang attribute to the right configs here.
                  // other preprocessors should work out of the box, no loader config like this nessessary.
                  'scss': 'vue-style-loader!css-loader!sass-loader',
                  'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                },
                // other vue-loader options go here
              }
            },


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
                    {
                      loader: 'sass-loader',
                      options: {
                        sassOptions: {
                          includePaths: ['./node_modules']
                        },
                        // Prefer Dart Sass
                        implementation: require('sass'),
          
                        // See https://github.com/webpack-contrib/sass-loader/issues/804
                        webpackImporter: false,
                      }
                    }


                ]
            }



        ]
    },    

    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development")
        }),

        new MiniCssExtractPlugin({
            filename: process.env.NODE_ENV === 'development' ? 'css/[name].css' : 'css/[name].min.css',
            allChunks: true
        }),
        // new OptimizeCssAssetsPlugin(),
        new VueLoaderPlugin(),


    ]






}




