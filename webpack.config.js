'use stict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          'ts-loader',
          'tslint-loader',
        ],
        exclude: /node-modules/,
      },
      {
        test: /\.css$/,
        use: [
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.styl(us)?$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'stylus-loader',
        ],
      },
      {
        test: /\.html$/,
        use: [
          'html-loader',
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }],
      },
      {
        test: /\.pdf/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }],
      },
      {
        test: /\.(gif|bmp|jpg|jpeg|svg|png)$/,
        use: [ 'file-loader' ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  devServer: {
    hot: true,
    host: '0.0.0.0',
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      inject: true,
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
