const webpack = require('webpack');
const config = require('./webpack.base');
const merge = require('webpack-merge');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const {
	root,
	cssLoaders
} = require('./helpers');


const devConfig = {
	devtool: '#cheap-module-eval-source-map',
	module: {
		rules: [{
				test: /\.ts$/,
				use: ['@angularclass/hmr-loader']
			},
			{
				test: /\.(css|scss)$/,
				exclude: root('src/app/**/*'),
				use: [ 'style-loader', ...cssLoaders() ]
			}
		]
	},
	plugins: [
		new FriendlyErrorsWebpackPlugin(),
	] 
};








module.exports = merge(config, devConfig);