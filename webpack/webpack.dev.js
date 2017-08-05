const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const { root } = require('./helpers');
const base = require('./webpack.base.js');





const devConfig = webpackMerge.smart(base, {
	entry: {
		app: [
			'webpack-dev-server/client?http://localhost:' + process.env.PORT,
			'webpack/hot/only-dev-server'
		]
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: ['@angularclass/hmr-loader']
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
	]
});


module.exports = devConfig;