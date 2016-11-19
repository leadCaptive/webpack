var path = require('path');
var webpack = require('webpack');
//var args = require('node-args'); // 读取运行时传入的参数

var env = process.env.NODE_ENV;

var config = {
    entry: ['./index'],
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    // 从webpack 引入
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //   compress: {
        //     warnings: false
        //   }
        // }),
        // new webpack.optimize.OccurenceOrderPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            include: __dirname,
            loader: 'babel'
        }, {
            test: /\.css?$/,
            loaders: ['style', 'raw'],
            include: __dirname
        }]
    }
};

// --minify 自定义参数处理
// if (args.minify){
//   config.plugins = [
//     new webpack.optimize.UglifyJsPlugin({
//       compress: {
//         warnings: false
//       }
//     }),
//     new webpack.optimize.OccurenceOrderPlugin()
//   ]
// }

if (env === 'production') {
    config.plugins = [
        // 警告开关
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        // 让文件更小
        new webpack.optimize.OccurenceOrderPlugin()
    ]

}

module.exports = config;
