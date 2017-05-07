/**
 * Created by xinzhu16 on 17-5-7.
 */
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');
// 引入基本配置
var config = require('./webpack.config');

config.output.publicPath = '/';

config.plugins = [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),

    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, '../app/index/index.html'),
        inject: true
    })
];

// config.entry = ['webpack-hot-middleware/client',config.entry];
var devClient = './build/dev-client';
Object.keys(config.entry).forEach(function (name, i) {
    var extras = [devClient]
    config.entry[name] = extras.concat(config.entry[name])
})


module.exports = config;