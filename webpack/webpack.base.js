
const webpack = require('webpack');


// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;


const { root } = require('./helpers');
const config = {};



config.entry = {
	'polyfills': root('src/polyfills.ts'),
	'vendor': root('src/vendor.ts'),
	'app': [
		root('src/app/app.ts')
	]
};


config.output = {
	path: root('dist'),
	publicPath: '/',
	filename: 'js/[name].js',
	chunkFilename: '[id].chunk.js'
};


config.resolve = {
	extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html']
};

config.module = {
	rules: [
		{
			test: /\.ts$/,
			use: [
				'awesome-typescript-loader',
				'angular2-template-loader',
			]
		},
		{
			test: /\.(css|scss)$/,
			use: [
				'style-loader',
				'css-loader',
				'postcss-loader',
				'sass-loader'
			],
			exclude: [
				root('src/app')
			]
		},
		{
			test: /\.(css|scss)$/,
			use: [
				'raw-loader',
				'postcss-loader',
				'sass-loader'
			],
			exclude: [
				root('src/styles')
			]
		},
		{
			test: /\.html$/,
			use: ['html-loader']
		}
	]
};


config.plugins = [
	new webpack.ContextReplacementPlugin(
		/angular(\\|\/)core(\\|\/)@angular/,
		root('src'),
		{}
	),
	new HtmlWebpackPlugin({
		template: root('src/public/index.html')
	}),
	new CopyWebpackPlugin([
		{ from: root('src/public/img'), to: 'img' }
	]),

	new webpack.LoaderOptionsPlugin({
		options: {
			postcss: [
				autoprefixer({
					browsers: ['last 5 version']
				})
			]
		}
	}),
	new webpack.DefinePlugin({
		'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
		'DEV': process.env.DEV,
		'DEBUG': process.env.DEBUG
	})
];



if (!process.env.TEST) {
	config.plugins.push(
		new CommonsChunkPlugin({
			name: ['vendor', 'polyfills']
		})
	)
}







module.exports = config;