require('dotenv').config();
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv').config({ path: __dirname + '/.env' })
const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'client/src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'client/dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'client/src', 'index.html'),
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed),
      'process.env.NODE_ENV': JSON.stringify(isDevelopment ? 'development' : 'production'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
  resolve: {
    // extensions: ['', 'js', 'jsx'],
    modules: [
      'node_modules'
    ],
  },
};
