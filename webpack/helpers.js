const path = require('path');
const autoprefixer = require('autoprefixer');


exports.root = (pathname) => path.join(__dirname, '../' + pathname);

exports.cssLoaders = () => ([{
		loader: 'css-loader',
		options: {
			sourceMap: true,
			minimize: process.env.__DEBUG__
		}
	},
	'postcss-loader',
	'sass-loader'
]);