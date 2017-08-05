
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');




const DEV = process.env.DEV;
const DEBUG = process.env.DEBUG;
const PORT = process.env.PORT || 8888;




const config = require('./webpack.dev.js');








const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
    port: PORT,
    inline: true,
    host: 'localhost',
    publicPath: '/',
    contentBase: 'dist',
    hot: true
});


server.listen(PORT);




