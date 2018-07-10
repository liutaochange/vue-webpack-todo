const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const isDev = process.env.NODE_ENV === 'development'
const config = {
  target: 'web',
  mode: 'none',
  entry: [
    "babel-polyfill",
    path.join(__dirname, '../src/index.js')
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.vue$/, use: 'vue-loader' },
      { test: /\.jsx$/, use: 'babel-loader' },
      { 
        test: /\.css$/, 
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|jpg|gif|jpeg|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024
            }
          }
        ]
      },
      { 
        test: /\.styl$/, 
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              modules: true,
              sourceMap: true
            }
          },
          {loader: 'stylus-loader'}
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),
    new CleanWebpackPlugin(['dist']),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin(),
    new webpack.optimize.SplitChunksPlugin({
        chunks: "all",
        minSize: 20000,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        name: true
    })
  ]
}

if (isDev) {
  config.devServer = {
    open: true,
    contentBase: path.join(__dirname, '../dist'),
    compress: false,
    host: 'localhost',
    port: 9000,
    overlay: {
      warnings: true,
      errors: true
    },
    hot: true
  }
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
}

module.exports = config