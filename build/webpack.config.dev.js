'use strict'

const webpack = require('webpack')
const HTMLWebpckPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractPlugin = require('extract-text-webpack-plugin')
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  mode: 'development',

  entry: './src/app.js',

  // output: {
  //   path: __dirname + '/../dist',
  //   filename: 'main.js',
  // },

  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: true,
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loaders: [ 'style-loader', 'css-loader' ]
      },
    ],
  },

	devServer: {
		// historyApiFallback: true,
    hot: true,
    contentBase: 'dist',
	},

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpckPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
    }),
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([{
      from: resolve('static/img'),
      to: resolve('dist/static/img'),
      toType: 'dir'
    }]),
    new ExtractPlugin('main.css'),
  ],
}
