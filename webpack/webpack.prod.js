
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');


// plugins
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;


const base = require('./webpack.base.js');



const prodConfig = webpackMerge(base, {
	plugins: [
		new CleanWebpackPlugin(
			['dist'],
			{ root: process.cwd() }
		),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: false,
			mangle: { keep_fnames: true }
		})
	]
});




module.exports = prodConfig;



