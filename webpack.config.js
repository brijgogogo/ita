const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const TARGET = process.env.npm_lifecycle_event;
const isDevEnv = TARGET === 'start' || !TARGET;

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: isDevEnv
});

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
            presets: ['es2015', "react"]
          }
        },
      },
      /*{
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: PATHS.app
      },*/
      {
        test: /\.s?css$/,
        include: PATHS.app,
        use: extractSass.extract({
          use: [{
            loader: "css-loader",
            options: {
              sourceMap: isDevEnv
            }
          }, {
            loader: "sass-loader",
            options: {
              sourceMap: isDevEnv
            }
          }],
          fallback: "style-loader"
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
};

if(isDevEnv) {
  module.exports = merge(common, {
    devServer: {
      contentBase: PATHS.build,
      historyApiFallback: true,
      hot: true,
      inline: true,
      //progress: true,
      stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'eval-source-map',
  });
}

if(TARGET === 'build') {
  module.exports = merge(common, {});
  //add minification
}
