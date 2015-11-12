const webpack = require('webpack');
const path = require('path');
const WebpackDevServer = require('webpack-dev-server');

// First we fire up Webpack an pass in the configuration we
// created
const bundleStart = null;
const compiler = webpack({
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server'
    ],
    output: {
        path: path.join(__dirname, '../../dist'),
        filename: 'trolly.js',
        publicPath: 'http://localhost:8080/assets/',
        libraryTarget: 'umd',
        library: 'trolly'
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
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
});

const bundler = new WebpackDevServer(compiler, {
    publicPath: 'http://localhost:8080/assets/',
    // Configure hot replacement
    hot: true,
    // The rest is terminal configurations
    quiet: false,
    noInfo: true,
    historyApiFallback: true,
    progress: true,
    stats: {
        colors: true
    }
    // We fire up the development server and give notice in the terminal
    // that we are starting the initial bundle
}).listen(8080, 'localhost', function(error) {

    if (error) {
        console.log(error);
    }
    console.log('The asset server is running...');
});