var config = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devtool: "source-map",
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel'},
      {test: /\.css$/, loader: 'style!css!'}
    ]
  }
}
module.exports = config;
