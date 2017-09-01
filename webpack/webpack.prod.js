const webpack = require('webpack');
const config = require('./webpack.base');
const merge = require('webpack-merge');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const SimpleProgressPlugin = require('webpack-simple-progress-plugin');


const {
	root,
	cssLoaders
} = require('./helpers');


const prodConfig = {
	devtool: false,
	module: {
		rules: [
			{
				test: /\.(css|scss)$/,
				exclude:  root('src/app/**/*'),
				use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: cssLoaders() })
			}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			output: { comments: false },
			minimize: true,
			sourceMap: false,
			exclude: [/node_modules/]
		}),
		new ExtractTextPlugin('style.css'),
		new CleanWebpackPlugin(['dist'], { root: process.cwd() }),
		new SimpleProgressPlugin()
	]
}






module.exports = merge(config, prodConfig);