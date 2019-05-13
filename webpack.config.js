const path = require('path');

module.exports = {
	entry: './src/app.js',
	mode: 'development',
	output: {
		filename: 'stock-app.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
			}
		}]
	},
};

