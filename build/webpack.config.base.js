const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
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
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {loader: 'stylus-loader'}
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new VueLoaderPlugin()
  ]
}