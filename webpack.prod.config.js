var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var getPxToRemoptions = function (rootValue) {
    var propWhiteList = [
        'width',
        'margin', 'margin-right', 'margin-left', 'margin-top', 'margin-bottom',
        'padding', 'padding-right', 'padding-left', 'padding-top', 'padding-bottom',
        'top', 'left', 'right', 'bottom'
    ];
    return {
        rootValue: rootValue,
        unitPrecision: 5,
        propWhiteList: propWhiteList,
        selectorBlackList: [],
        replace: true,
        mediaQuery: true,
        minPixelValue: 0
    };
}
var plugins = [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    new ExtractTextPlugin("[name].css",{allChunks: true}),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
    })
];
var config = {
    entry: {
        app: [
            'babel-polyfill',
            './client/app/app'
        ],
        vendor: [
            'react',
            'react-dom'
        ]
    },
    output: {
        path: path.join(__dirname, 'assets/dist'),
        publicPath: '/assets/dist',
        chunkFilename: '[name].chunk.js',
        filename: '[name].min.js'
    },
    module: {
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
            loader: "style!css!postcss!less"
        },{
            test: /\.css$/,
            include:[path.join(__dirname,'assets/css/')],
            loader:ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader")
        }, {
            test: /\.css$/,
            include:[path.join(__dirname,'client/')],
            loader: "style!css?module&localIdentName=[name]__[local]___[hash:base64:5]!postcss"
        },{
            test: /\.css$/,
            include:/node_modules/,
            loader:'style!css'
        }, {
            test: /\.(png|jpg|svg|gif|jpeg)$/,
            loader: 'url?limit=10000'
        }, {
            test: /\.(woff|woff2)$/,
            loader: 'url?limit=100000'
        }]
    },
    postcss: [
        require('precss')(),
        //require('postcss-cssnext')(),
        require('cssnano')(),
        //require('postcss-alias')(),
        require('autoprefixer')({browsers: ['last 2 versions']}),
        //require('postcss-pxtorem')(getPxToRemoptions(75))
    ],
    babel:{
        presets: [
            "es2015",
            "stage-0",
            "react"
        ],
        plugins: [
            "transform-decorators-legacy",
            ["antd",{style:'css'}]

        ]
    },
    resolve: {
        extensions: ['', '.js', '.scss', '.css', '.jsx']
    },
    plugins: plugins
};
module.exports = config;