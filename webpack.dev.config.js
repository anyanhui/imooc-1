var webpack=require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var getPxToRemoptions=function(rootValue){
    var propWhiteList=[
        'width',
        'margin','margin-right','margin-left','margin-top','margin-bottom',
        'padding','padding-right','padding-left','padding-top','padding-bottom',
        'top','left','right','bottom'
    ];
    return {
        /*
         rootValue,取决于设计稿是按照什么设备的尺寸来设计的，
         那这就是对应于为该尺寸媒体查询@media的那个html font-size值
         */
        rootValue: rootValue,
        unitPrecision: 5,//保留几位小数点
        propWhiteList: propWhiteList,
        selectorBlackList: [],
        replace: true,
        /*
         在media中的px是否也进行转换:
         @media only screen and (min-width: 1080px)
         */
        mediaQuery: false,
        minPixelValue: 0
    };
}
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var plugins = [
    //CommonsChunkPlugin插件可以写多个(多页面),也有多种写法
    //1:将所有页面中的公共部分提取
    //new webpack.optimize.CommonsChunkPlugin('common.js'),

    //2:page1和page2中公用的提取出来打包为commons
    //new CommonsChunkPlugin("commons.js", ["page1", "page2"])
    //3:综合写法
    //new webpack.optimize.CommonsChunkPlugin({
    //    name: "common",
    //    //如果不写就默认按照output.filename创建(common.min),一般可以省略
    //    filename: "common.js",
    //    //page1和page2中公用的提取出来打包为commons
    //    chunks:["page1", "page2"],
    //    /*
    //     minChunks是指一个文件至少被require几次才会被放到common里,
    //     这里表示一个文件至少被require两次才能放在common里
    //     */
    //    minChunks: 2
    //}),
    //4:打包第三方库，第三方库在entry.vendor中配置
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename:'vendor.bundle.js',
        minChunks: Infinity
    }),
    //这个插件可以使xxx变成全局变量，不用在自己文件require('xxx')了
    //new webpack.ProvidePlugin({
    //    $: 'jquery'
    //}),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.optimize.UglifyJsPlugin({
    //     compress: {
    //         warnings: false
    //     }
    // }),
    //单独打包css文件，然后以link形式引入,可以加第二个参数{allChunks: true}表示合并多个css文件
    new ExtractTextPlugin("[name].css",{allChunks: true}),
    new webpack.optimize.DedupePlugin(),//去除重复引入的js代码
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"development"'
    })
];
var config = {
    entry: {
        app: [
            'webpack-hot-middleware/client?reload=true',
            'babel-polyfill',//为了能支持async,await,Generator
            './client/app/'
        ],
        vendor: [
            'react',
            'react-dom',
            'redux'
        ]
    },
    output: {
        path: path.join(__dirname, 'assets/dist'),
        publicPath: 'http://localhost:3000/assets/dist/',
        chunkFilename: '[name].chunk.js',
        filename: '[name].min.js'
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    },
    module: {
        // 使用module.noParse针对单独的react.min.js这类没有依赖的模块，速度会更快
        noParse: [
            path.resolve(nodeModulesPath, 'react/dist/react.min.js'),
            path.resolve(nodeModulesPath, 'react-dom/dist/react-dom.min.js'),
            path.resolve(nodeModulesPath, 'redux/dist/redux.min.js')
        ],
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel'
        }, {
            test: /\.scss/,
            exclude: /node_modules/,
            loader: 'style!css?module&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass'
        },{
            test: /\.less$/,
            exclude: /node_modules/,
            loader: "style!css!postcss!less"
        }, {
            test: /\.css$/,
            include:[path.join(__dirname,'assets/css/')],
            loader:ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader")
        },{
            test: /\.css$/,
            include:[path.join(__dirname,'client/')],
            loader: "style!css?module&localIdentName=[name]__[local]___[hash:base64:5]!postcss"
        },{
            test: /\.css$/,
            include: /node_modules/,//include和exclude都可以是一个数组
            loader: 'style!css'
        }, {
            test: /\.(png|jpg|svg|gif|jpeg)$/,
            loader: 'url?limit=10000'
        }, {
            test: /\.(woff|woff2)$/,
            loader: 'url?limit=100000'
        }]
    },
    //postCss插件
    postcss: [
        //可以像sass那样写postcss
        require('precss')(),
        //require('postcss-cssnext')(),//试用未来的css语法
        require('cssnano')(),//优化和压缩css代码
        //require('postcss-alias')(),//设置css属性别名如：@alias {w:width;h:height;}
        require('autoprefixer')({browsers: ['last 2 versions']}),
        //require('autoprefixer')()//该功能已被包含在postcss-cssnext中
        /*
         移动端web一般才会用到下面这个
         */
        //require('postcss-pxtorem')(getPxToRemoptions(32))//75是iphone6的尺寸/10
    ],
    resolve: {
        extensions: ['', '.js', '.scss', '.css', '.jsx']
    },
    // devServer: {
    //     historyApiFallback: true,
    //     contentBase: '',  //静态资源的目录 相对路径,相对于当前路径 默认为当前config所在的目录
    //     noInfo: true, //  --no-info option
    //     hot: true,        //自动刷新
    //     inline: true,
    //     port: 3000,
    //     progress: true,
    //     stats: { colors: true }
    // },
    //externals:{
    //    'react':'React'//CDN
    //},
    devtool: 'source-map',
    plugins: plugins
};
module.exports = config;