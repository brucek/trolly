const path = require('path');
const webpack = require('webpack');

const WebpackDevServer = require('webpack-dev-server');
//const config = require('./webpack.config');

const config = {
  entry: [
    'webpack-dev-server/client?http://localhost:5000',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'build.js',
    publicPath: 'http://localhost:5000/assets/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src'),
        exclude: /(node_modules)/
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: 'http://localhost:5001'
  }
};



new WebpackDevServer(webpack(config), {
 entry: [
    'webpack-dev-server/client?http://localhost:5000',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  publicPath: config.output.publicPath,
  hot: true,
  headers: { 'Access-Control-Allow-Origin': '*' },
  historyApiFallback: true
}).listen(5000, 'localhost', function(error) {
  if (error) {
    console.log(error);
  }

  console.log('Listening at localhost:5000');
});
