var path = require('path'); //引入path
var webpack = require('webpack') //使用plugins

var config = {
  entry: {
    admin: './admin/index.js',
    consumer: './consumer/index.js'
  },
  plugins: [

    //new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: false,
        drop_debugger: true,
        drop_console: true
       }
    }), //压缩代码
    //new ExtractTextPlugin("[name]-[hash].css")
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: '[name].bundle.js'
  }
};

module.exports = config;
