var webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var plugins = [
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    //new CommonsChunkPlugin("admin-commons.js", ["ap1", "ap2"])
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    new webpack.optimize.DedupePlugin(),//去除重复引入的js代码
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
    })
];
var config = {
    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            'babel-polyfill',//为了能支持async,await,Generator等es7语法
            './src/app'
        ],
        example: ['babel-polyfill', './src/example']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'http://localhost:3000/dist/',
        filename: '[name].min.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            //exclude: /node_modules/,
            exclude: nodeModulesPath,
            loader: 'babel'
            //loader: 'react-hot!babel'
            //query: {
            //    presets: ['react', 'es2015']
            //    // plugins: ['transform-runtime']
            //}
        }, {
            test: /\.scss/,
            exclude: nodeModulesPath,
            loader: 'style!css?module&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass'
        }, {
            test: /\.css$/,
            exclude: nodeModulesPath,
            loader: "style!css?module&localIdentName=[name]__[local]___[hash:base64:5]!postcss"
        }, {
            test: /\.(png|jpg|svg|gif|jpeg)$/,
            loader: 'url?limit=10000'
            //loader: 'url?limit=10000&mimetype=image/svg+xml'
        }, {
            test: /\.(woff|woff2)$/,
            loader: 'url?limit=100000'
        }]
    },
    //postCss插件
    postcss: [
        require('precss')(),//可以像sass那样写css
        //require('cssnext')(),//试用未来的css语法
        require('cssnano')(),//优化和压缩css代码
        //require('postcss-alias')(),//设置css属性别名如：@alias {w:width;h:height;}
        require('autoprefixer')({browsers: ['last 2 versions']})
    ],
    resolve: {
        extensions: ['', '.js', '.json', '.scss', '.css', '.jsx']
        //alias: {
        //    'react':path.resolve(nodeModulesPath,'react/dist/react.min.js'),
        //    'react-dom':path.resolve(nodeModulesPath,'react-dom/dist/react-dom.min.js'),
        //    'redux':path.resolve(nodeModulesPath,'redux/dist/redux.min.js'),
        //    'immutable':path.resolve(nodeModulesPath,'immutable/dist/immutable.min.js'),
        //    'react-redux':path.resolve(nodeModulesPath,'react-redux/dist/react-redux.min.js')
        //}
    },
    devServer: {
        historyApiFallback: true,
        contentBase: '',  //静态资源的目录 相对路径,相对于当前路径 默认为当前config所在的目录
        noInfo: true, //  --no-info option
        hot: true,        //自动刷新
        inline: true,
        port: 3000,
        progress: true
    },
    //externals:{
    //    'react':'React',//CDN
    //    'react-dom':'ReactDOM'
    //},
    devtool: 'source-map',
    plugins: plugins
};
module.exports = config;