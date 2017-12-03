var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    // frontpage: './static/frontpage/index.jsx',
    cms: './static/cms/index.jsx'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '/dist')
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react']
        }
      }
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }
      ]
    }
    ]
  },
  devtool: 'source-map',
  plugins: [
    // 加入 html 模板任务
    // new HtmlWebpackPlugin({
    //   // 模板文件
    //   template: 'static/frontpage/index.html',
    //   // 打包后文件名称，会自动放到 output 指定的 dist 目录
    //   filename: 'index.html',
    //   chunks: ['frontpage']
    // }),
    new HtmlWebpackPlugin({
      // 模板文件
      template: 'static/cms/index.html',
      // 打包后文件名称，会自动放到 output 指定的 dist 目录
      filename: 'index.html',
      thunks: ['cms']
    })
  ]
}
