
const testWebpackConfig = require('./../webpack/webpack.test.js');







module.exports = config => {
	config.set({
		browsers: ['Chrome'],
		frameworks: ['jasmine'],
		files: ['./index.js'],
		preprocessors: {
			'./index.js': ['webpack', 'sourcemap']
		},
		webpack: testWebpackConfig,
		webpackMiddleware: {
			noInfo: true
		}
	});
}












