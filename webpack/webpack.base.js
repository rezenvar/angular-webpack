const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const autoprefixer = require('autoprefixer');


const path = require('path');
const {
	root,
} = require('./helpers');



const config = {};

config.stats = false;

config.entry = {
	polyfills: root('src/app/polyfills.ts'),
	vendor: root('src/app/vendor.ts'),
	app: root('src/app/app.ts')
}



config.output = {
	path: root('dist'),
	filename: 'js/[name].js',
	publicPath: '/',
	devtoolModuleFilenameTemplate: '[absolute-resource-path]',
	devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
};


config.resolve = {
	modules: [
		root('src/app'),
		'node_modules'
	],
	extensions: ['.vue', '.js', '.json', '.ts', '.tsx', '.pug', '.*']
};



config.module = {};



config.module.rules = [{
		test: /\.ts$/,
		use: [
			'awesome-typescript-loader',
			'angular2-template-loader',
		]
	},
	{
		test: /\.(css|scss)$/,
		use: [
			'raw-loader',
			'postcss-loader',
			'sass-loader'
		],
		exclude: root('src/styles')
	},
	{
		test: /\.html$/,
		use: ['html-loader']
	}
];



config.plugins = [
	new webpack.ContextReplacementPlugin(
		/angular(\\|\/)core(\\|\/)@angular/,
		root('src'), {}
	),
	new CopyWebpackPlugin([
		{ from: root('src/public/img'), to: 'img' },
		{ from: root('src/public/fonts'), to: 'fonts' }
	]),
	new HtmlWebpackPlugin({
		template: root('src/public/index.html'),
		filename: 'index.html',
		inject: true
	}),
	new webpack.DefinePlugin({
		'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
		'__DEV__': process.env.__DEV__,
		'__DEBUG__': process.env.__DEBUG__
	}),
	new webpack.LoaderOptionsPlugin({
		options: {
			postcss: [ autoprefixer({ browsers: ['last 5 version'] }) ]
		}
	}),
	new webpack.optimize.CommonsChunkPlugin({ name: ['vendor', 'polyfills'] }),
]






module.exports = config;