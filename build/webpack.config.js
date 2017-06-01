/**
 * Created by Administrator on 17/5/6.
 */
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //使用热加载需要将入口改为多入口配置的方式，并且不影响构建。
    entry:{
        index:path.resolve(__dirname,'../app/index/index.js')
    },

    //publicPath 相对于根目录下的应用文件起始位置。
    output:{
        path:path.resolve(__dirname,'../output/static'),
        //publicpath作用
        publicPath:'static/',
        //filename和chunkFilename的作用？？
        filename:'[name].[hash].js',
        chunkFilename:'[id].[chunkhash].js'
    },
    //resolve遇到该数组的结尾的文件需要加载，要不默认加载js，vue等不声明不会加载，会报错
    resolve :{
        extensions:['.js','.vue'],
        /*alias:{
            'vue':'vue/dist/vue.js'
        }*/
    //    不加alias时是运行时构建。必须使用render函数，不能使用template。
    },

    module:{
        //webpack2.0中的loader不能省略，否则会报错
        loaders:[
            // 使用vue-loader 加载 .vue 结尾的文件
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader?presets=es2015',
                exclude: /node_modules/
            }
        ]
    },

//    插件模块
    plugins: [
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: path.resolve(__dirname, '../app/index/index.html'),
            inject: true
        })
        /*new webpack.ProvidePlugin({
            $: "jquery",
            _: "underscore"
        })*/
    ]
}