/* global __dirname */
const path = require('path')
const config = require('./config.js')
const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
}

const extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  disable: config.isDevEnv
})

const common = {
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: PATHS.app,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['es2015', 'react']
          }
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      /*{
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: PATHS.app
      },*/
      {
        test: /\.s?css$/,
        //test: /\.scss$/,
        include: PATHS.app,
        use: extractSass.extract({
          use: [{
            loader: 'css-loader',
            options: {
              sourceMap: config.isDevEnv
            }
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: config.isDevEnv
            }
          }],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/font-woff'
          }
        }
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/svg-xml'
          }
        }
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/octet-stream'
          }
        }
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/font-woff'
          }
        }
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }
      }
    ]
  },
  plugins: [
    //new webpack.optimize.UglifyJsPlugin(),
    //new HtmlWebpackPlugin({template: './app/index.html'})
    extractSass
  ],
}

if(config.isDevEnv) {
  module.exports = merge(common, {
    devServer: {
      contentBase: PATHS.build,
      historyApiFallback: true,
      hot: true,
      inline: true,
      //progress: true,
      stats: 'errors-only',
      host: config.host,
      port: config.port
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'eval-source-map',
  })
}

if(config.isBuild) {
  module.exports = merge(common, {})
  //add minification
}
