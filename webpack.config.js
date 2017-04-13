/**
 * Created by ty on 2016/11/16.
 */
var path = require('path');
var webpack = require("webpack");
require("babel-polyfill");
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//开发与真实环境分开
var env = process.env.WEBPACK_ENV;//和package.json 的scripts  WEBPACK_ENV的值对应
var outputFile = '';
var outputFolder = '';
var plugins = [
    new HtmlwebpackPlugin({//生成主页面（index.html） 根据模板插入css/js等生成最终HTML
       // filename:'/view/index.html',    //生成的html存放路径，相对于 path
        title: 'React Biolerplate by Linghucong',
        template: path.resolve(__dirname, 'template/index.ejs'),//这个创建index.html所需的模板
        inject: 'body',//true 允许插件修改哪些内容，包括head与body
        hash:true,    //为静态资源生成hash值
        minify:{    //压缩HTML文件
            removeComments:true,    //移除HTML中的注释
            collapseWhitespace:true  //删除空白符与换行符
            //collapseInlineTagWhitespace:true
        }
    }),
    //查找相等或近似的模块，避免在最终生成的文件中出现重复的模块
    //new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin('[name].css', {allChunks: true}),
    //全局挂载插件,将jquery挂载为全局的,使用 ProvidePlugin 加载使用率高的依赖库
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
    }),
    new webpack.HotModuleReplacementPlugin()   //全局开启代码热替换，修改代码后实时更新
];
var devtoolstr = '';
var entryArr = [];
var publicPath = '';
if (env === 'production') {//生产环境---压缩
    devtoolstr = 'cheap-module-source-map';
    outputFile = '[name].bundle.min.js';
    outputFolder = 'dist';
    publicPath = '';
    entryArr =  [path.resolve(__dirname, 'app/main.js')];
    var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
    plugins.push(new UglifyJsPlugin({
        minimize: true,
        compress: {
            warnings: false
        },
        except: ['$super', '$', 'exports', 'require']	//排除关键字;
    }));
} else {//package.json 中的scripts的dev的那种配置方式是自动刷新的cli模式
    entryArr =  ["webpack/hot/dev-server",
        path.resolve(__dirname, 'app/main.js')];
    outputFile = '[name].bundle.js';
    outputFolder = 'build';
   // publicPath = outputFolder;
    devtoolstr = '';//有对应的引用映射，但是这会打包很大的文件
   //devtoolstr = 'cheap-module-eval-source-map';
}
function assetsPath(paths) {
    return path.posix.join('assets', paths);
}
var config = {
    debug: true,
    entry: {
        main:entryArr
    },
    clearBeforeBuild: true,  //清除之前构建的旧文件，以便重新构建
    output: {
        path: path.resolve(__dirname, outputFolder),
        filename: outputFile,
        publicPath:publicPath
        //来指定编译后的包(bundle)的访问位置,也就是index.html，
        // link（href）和script（src）前会加一个这个publicPath路径
        // publicPath:'http://127.0.0.1:8080/'+outputFolder+'/'
    },
    module: {
        loaders: [
            //{
            //    test: /\.js$/,
            //    loader: 'babel-loader',
            //    exclude: /node_modules/
            //},
            {
                test: /\.(vue)$/,
                loader: 'vue',
                options: {
                    loaders: {
                        css: 'css',
                        less: 'less',
                        js:'babel'
                    }
                }
            },
            {
                test: /\.(less|css)$/,
                //将内联css提取到单独的css文件
                loader: ExtractTextPlugin.extract('',
                    'css?sourceMap!' +
                    'less?sourceMap'
                )//独立css出来，然后在页面上外链css
            },
            //{
            //    test: /\.css$/,
            //    loader: 'style!css!autoprefixer' // Run both loaders
            //},
            {test: /\.(png|jpg|gif)$/, loader: 'file?name=[path][name].[ext]?[hash]'},
            {test: /\.woff/, loader: 'file?prefix=font/&limit=10000&mimetype=application/font-woff'},
            {test: /\.(ttf|eot|svg)/, loader: 'file?prefix=font/'}
        ]
    },
    //打包好的代码已经不那么易读了，直接在这样的代码上调试还是不那么方便的。
    // 这个时候，webpack 有另外一个现成的东西：source map 支持
    devtool: devtoolstr,
    resolve: {//resolve 用来配置应用层的模块（要被打包的模块）解析
        // 现在可以写 require('file') 代替 require('file.js')
        extensions: ['', '.js'],
        //当出现 Node.js 模块依赖查找失败的时候    fallback
        fallback: path.join(__dirname, "node_modules"),
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    },
    resolveLoader: {//resolveLoader 用来配置 loader 模块的解析
        //当出现 Node.js 模块依赖查找失败的时候    fallback
        fallback: path.join(__dirname, "node_modules")
    },
    plugins: plugins
};
if (env === 'dev') {//开发环境--本地服务
     config.devServer = {
         proxy: {
             '/dual-student/*': {
                 changeOrigin: true,
                 target: 'http://dev1.boxuegu.com:58000/',
                 host: 'boxuegu.com'

             }
         },
         //设置为true,router.js中为html5 history模式时，刷新页面不会出现页面空白的问题
         historyApiFallback: true,
         inline: true,
         hot: true
     }
 }
module.exports = config;