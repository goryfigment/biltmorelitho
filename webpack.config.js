const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        home: './templates/src/js/home.js'
    },
    output: {path: __dirname + '/templates/dist', filename: '[name].bundle.js'},
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader'},
            {test: /\.(jpe?g|png|gif|svg)$/i, loader: ["file-loader?name=assets/[name].[ext]", 'image-webpack-loader']}
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors'),
        new UglifyJSPlugin({mangle: {except: ['$super', '$', 'exports', 'require']}}),
        new HtmlWebpackPlugin({
            filename: 'home.html',
            chunks: ['home', 'vendors'],
            minify: {collapseWhitespace: true},
            hash: true,
            template: './templates/src/home.html'
        })
    ]
};