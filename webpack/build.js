
const webpack = require('webpack');
const prodConfig = require('./webpack.prod.js');


const compiler = webpack(prodConfig);



compiler.watch({}, (err, stats) => {
	if (err) console.log(err);
	if (stats) console.log(stats.toString({colors: true}));
})







