var path = require('path');
var process = require('process');

var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var precss = require('precss');
var autoprefixer = require('autoprefixer');

var webpackBaseConfig = require('../common/webpack.config.base');
var resolveEntry = webpackBaseConfig.resolveEntry;

var publicPath = '//localhost:5389/webapp/hybrid/src/spa/build/';
var imgPublicPath = '//localhost:5389/webapp/hybrid/src/spa/'

module.exports = {
    context: __dirname,
    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    },
    //entry: resolveEntry('./scripts/!(ui|mock|_)*.js', '.js', __dirname),//源文件
    entry: {
        main: './scripts/main.js'
    },
    output: {//输出文件
        path: __dirname+'/build/',//打包后的输出路径
        publicPath: publicPath,//html引用路径
        chunkFilename: '[name].chunk.js',
        filename: 'scripts/[name].js'//文件打包后的名字
    },
    module: {//资源加载器，什么样的资源对应什么样的加载器，加载器后面支持？加参数，多个加载器之间用！来连接
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['transform-object-assign']
                }
            },
            {
                test: /\.css$/,
                // loader: 'style!css!postcss',
                loader: ExtractTextPlugin.extract('style', 'css!postcss')
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                include: [
                    path.resolve(__dirname, 'images')
                ],
                loader: 'url?limit=1000&name=images/[name].[ext]'
            },
            {
                test: /\.(eot|svg|ttf|woff)$/i,
                include: [
                    path.resolve(__dirname, 'fonts')
                ],
                loader: 'url?limit=1000&name=fonts/[name].[ext]'
                // loader: 'file?name=fonts/[name].[ext]'
            }
        ]
    },
    postcss: function() {
        return [precss ]; //autoprefixer
    },
    plugins: [
        new ExtractTextPlugin('styles/[name].css', {allChunks: true}),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
            'Debug': true
        })
    ],
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    devtool: "source-map"
};

module.exports.devServer = {
    contentBase: '../../',
    host: 'localhost',
    port: 8080,
    inline: true,
    proxy: {
        '*': 'http://localhost:5389'
    }
};
