require('babel-core/register');

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../config');

new WebpackDevServer(webpack({
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server'
    ],
    output: {
        path: config.distDir,
        filename: config.dev,
        publicPath: 'http://localhost:8080/assets/',
        libraryTarget: 'umd',
        library: config._app
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: [/hot/,
                /node_modules/,
                /babel/,
                /node_modules[\\\/]react(-router)?[\\\/]/ // In case this is used together with React
            ],
            loaders: ['babel-loader']
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        // Used for hot-reload
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}), {
    publicPath: 'http://localhost:8080/assets/',
    // Configure hot replacement
    hot: true,
    // The rest is terminal configurations
    quiet: false,
    noInfo: true,
    historyApiFallback: {
        index: './templates/index.html'
    },
    progress: true,
    stats: {
        colors: true
    }
    // We fire up the development server and give notice in the terminal
    // that we are starting the initial bundle
}).listen(8080, 'localhost', function(err, result) {

    if (err) {
        console.log(err);
    }
    console.log('The asset server is running at localhost: 8080');
});