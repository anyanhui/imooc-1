var express=require('express'),
    webpack=require('webpack'),
    path=require('path'),
    port=process.env.PORT||3000,
    webpackDevMiddleware=require('webpack-dev-middleware'),
    webpackHotMiddleware=require('webpack-hot-middleware'),
    webpackDevConfig=require('./webpack.dev.config'),
    proxy=require('http-proxy-middleware'),
    compiler=webpack(webpackDevConfig),
    app=express();
app.use('/jquery', proxy({target: 'http://cdn.bootcss.com', changeOrigin: true}));
// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())
app.use(webpackDevMiddleware(compiler,{
    // quiet: true,
    noInfo: true,
    // inline: true,
    // lazy: false,
    publicPath: webpackDevConfig.output.publicPath,
    stats: {colors: true,chunks: false}
}))
app.use(webpackHotMiddleware(compiler))
app.use(express.static(path.join(__dirname, '/')))
app.get("/*", function(req, res) {
    res.sendFile(__dirname + '/index.html')
});

app.listen(port, function(error) {
    if (error) {
        console.log(error)
    } else {
        console.log(`==> Listening on port:${port}`)
    }
});