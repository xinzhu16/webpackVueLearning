该文件为问题与解决方法的日志文件
始于2017.6.5

1:scss的使用，现在不能使用scss，请查找相关资料解决问题
    在vue的loader对象中加入options：...,详情见webpack.config.js文件中vueloader中的options
2:vue-router,使用的时候要先注册。子路由使用<router-view>

3:在vue-router中 使用了懒加载，可是懒加载貌似效果不明显，可能是我理解错误，需要重新去查看懒加载的定义。
