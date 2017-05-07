/**
 * Created by xinzhu16 on 17-5-7.
 */
var express = require('express');
var webpack =require('webpack');
var config = require('./webpack.dev.config');

var app=express();
var compiler = webpack(config);

var devMiddleware = require('webpack-dev-middleware')(compiler,{
    publicPath:config.output.publicPath,
    stats:{
        colors:true,
        chunks:false
    }
});
var hotMiddleware = require('webpack-hot-middleware')(compiler);

// webpack插件，监听html文件改变事件
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        // 发布事件
        hotMiddleware.publish({ action: 'reload' })
        cb()
    })
});

app.use(devMiddleware);
app.use(hotMiddleware);
app.listen(8899,function (err){
    if(err){
        console.log(err);
        return
    }
    console.log('listening at http://localhost:8888')
})