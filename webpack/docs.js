var path = require('path');
var glob = require('glob');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');

var { VueLoaderPlugin } = require('vue-loader');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const autoprefixer = require('autoprefixer');

// Try the environment variable, otherwise use root
const BASE_URL = process.env.BASE_URL || '/';

module.exports = {
  mode: 'development',
  target: 'web',
  devtool: 'source-map',
  entry: {
    'docs': ['./docs/app.js'],
    //'admin': './src/admin/app.js',          

  },
  output: {
    path: path.join(__dirname, '../dist'),
    //filename: '[name].[hash:8].js',
    filename: '[name]/js/app.js',
    publicPath: BASE_URL,    
    //chunkFilename: '[name]-chunk.js',
    //sourceMapFilename: '[name].map'
  },
  module: {
    rules: [
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
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [autoprefixer()]
              }
            }
          },
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
      },


      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'less-loader'
        ]
      },

      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },


  // optimization:{
  //   splitChunks:{chunks: "all"}
  // },

  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development"
      ),
      "process.env.VUE_ENV": '"client"',
      // 'process.env.BASE_URL': JSON.stringify(BASE_URL),
    }),


    new HtmlWebpackPlugin({
      filename: './docs/index.html',
      template: './docs/index.html',
      hash: true,
      // chunks: ['www'],
      minify: {
        collapseWhitespace: true,
        // preserveLineBreaks: true,
        removeComments: true,
        collapseBooleanAttributes: true,
        removeEmptyAttributes: true
      },


    }),

    new ScriptExtHtmlWebpackPlugin({
      // sync: 'first.js',
      defaultAttribute: 'defer'
    }),


    new HtmlWebpackExternalsPlugin({
      // hash: true,
      externals: [
        // {
        //   module: 'jquery',
        //   entry: 'https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js',
        //   global: 'jQuery'
        // },
        // {
        //   module: 'Popper',
        //   entry: {
        //     path: 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js',
        //     attributes: {
        //       defer: 'true'
        //     }

        //   }

        // },
        // {
        //   module: 'boostrap',
        //   entry: {
        //     path: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha2/dist/js/bootstrap.min.js',
        //     attributes: {
        //       defer: 'true'
        //     }
        //   }

        // },
        {
          module: 'vue',
          global: 'Vue',
          entry: {
            path: 'https://cdn.jsdelivr.net/npm/vue@3.0.2/dist/vue.runtime.global.js',
            attributes: {
              defer: 'true'
            }
          }

        },
        {
          module: 'vue-router',
          global: 'VueRouter',
          entry: {
            path: 'https://cdn.jsdelivr.net/npm/vue-router@4.0.0-beta.13/dist/vue-router.global.js',

            attributes: {
              defer: 'true'
            }
          }
        },


        {
          module: 'axios',
          global: 'axios',
          entry: {
            path: 'https://cdn.jsdelivr.net/npm/axios@0.21.0/dist/axios.min.js',
            attributes: {
              defer: 'true'
            }
          }
        },
        {
          module: 'lodash',
          global: '_',
          entry: {
            path: 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.19/lodash.core.min.js',
            attributes: {
              defer: 'true'
            }
          }
        },
        {
          module: 'lodash',
          global: '_',
          entry: {
            path: 'https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js',
            attributes: {
              defer: 'true'
            }
          }
        },



        // {
        //   module: 'moment',
        //   global: 'moment',
        //   entry: 'https://cdn.jsdelivr.net/npm/moment@2.25.0/min/moment.min.js'
        // },

        // {
        //   module: 'vee-validate',
        //   global: 'VeeValidate',
        //   entry: {
        //     path: 'https://cdn.jsdelivr.net/npm/vee-validate@3.3.7/dist/vee-validate.full.min.js',
        //     attributes: {
        //       defer: 'true'
        //     }
        //   },
        // },

        // {
        //   module: 'vue-infinite-loading',
        //   entry: {
        //     path: 'https://cdn.jsdelivr.net/npm/vue-infinite-loading@2.4.5/dist/vue-infinite-loading.js',
        //     attributes: {
        //       defer: 'true'
        //     }
        //   }
        // },

        // {
        //   module: 'v-markdown-editor',
        //   entry: [
        //     {
        //       path: 'https://cdn.jsdelivr.net/npm/v-markdown-editor@1.2.6/dist/v-markdown-editor.min.js',
        //       attributes: {
        //         defer: 'true'
        //       }
        //     },
        //     {
        //       path: 'https://cdn.jsdelivr.net/npm/v-markdown-editor@1.2.6/dist/v-markdown-editor.css',
        //       attributes: {
        //         async: 'true',
        //       }
        //     }

        //   ],

        // },

        // {
        //   module: 'v-smooth-scrollbar',
        //   entry: {
        //     path: 'https://cdn.jsdelivr.net/npm/@morioh/v-smooth-scrollbar@1.0.3/dist/scrollbar.min.js',
        //     attributes: {
        //       defer: 'true'
        //     }
        //   }

        // },


        // {
        //   module: 'dompurify',
        //   global: 'DOMPurify',
        //   entry: {
        //     path: 'https://cdn.jsdelivr.net/npm/dompurify@2.0.12/dist/purify.min.js',
        //     attributes: {
        //       defer: 'true'
        //     }
        //   }

        // },

        // {
        //   module: 'marked',
        //   global: 'marked',
        //   entry: {
        //     path: 'https://cdn.jsdelivr.net/npm/marked@1.1.0/marked.min.js',
        //     attributes: {
        //       defer: 'true'
        //     }
        //   }
        // },

        // {

        //   module: 'prismjs',
        //   global: 'Prism',
        //   entry: [
        //     {
        //       path: 'https://cdn.jsdelivr.net/npm/prismjs@1.20.0/components/prism-core.min.js',
        //       attributes: {
        //         defer: 'true'
        //       }
        //     },
        //     {
        //       path: 'https://cdn.jsdelivr.net/npm/prismjs@1.20.0/plugins/autoloader/prism-autoloader.min.js',
        //       attributes: {
        //         defer: 'true'
        //       }
        //     }

        //   ]

        // },


        // {

        //   module: 'socket.io-client',
        //   entry: {
        //     path: 'https://cdn.jsdelivr.net/npm/socket.io-client@2.3.0/dist/socket.io.js',
        //     attributes: {
        //       defer: 'true'
        //     }
        //   }

        // },

        // {

        //   module: 'store',
        //   entry: {
        //     path: 'https://cdn.jsdelivr.net/npm/store@2.0.12/dist/store.legacy.min.js',
        //     attributes: {
        //       defer: 'true'
        //     }
        //   }

        // },


        // {

        //   module: 'viralroll',
        //   entry: {
        //     path: 'https://cdn.viralroll.net/js/widget.js',
        //     attributes: {
        //       defer: 'true'
        //     }
        //   }

        // },


        // {
        //   module: 'css',
        //   entry: [


        //     // {
        //     //   path: 'https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css',
        //     //   attributes: {
        //     //     async: 'true'
        //     //   }
        //     // },




        //     // {
        //     //   path: 'https://cdn.morioh.net/fa/v5.13.0/css/fontawesome.min.css',
        //     //   attributes: {
        //     //     async: 'true',

        //     //   }
        //     // },
        //     // {
        //     //   path: 'https://cdn.morioh.net/fa/v5.13.0/css/regular.min.css',
        //     //   attributes: {
        //     //     async: 'true',

        //     //   }
        //     // },


        //   ]
        // },


      ]
    }),




    new MiniCssExtractPlugin({
      filename: '[name]/css/app.css',
      allChunks: true
    }),

    new VueLoaderPlugin(),
    
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),   


  ],


}

