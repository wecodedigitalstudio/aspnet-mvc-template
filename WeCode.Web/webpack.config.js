"use strict";

let path = require('path');
let webpack = require('webpack');

let outputPath = path.resolve(__dirname, './build');

let plugins = [];

// Get the environment variable defined in the command (see package.json)
let env = process.env.WEBPACK_ENV;

// When compiling for production we want the app to be uglified.
if (env === 'production') {
	let UglifyPlugin = webpack.optimize.UglifyJsPlugin;

	plugins.push(new UglifyPlugin({minimize: true}));

	// We also add it as a global, the Vue lib needs it to determine if Dev tool should be active or not.
	plugins.push(new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: '"production"'
		}
	}));
	// Change file name extension to min.js
	fileName = fileName.replace(/js/g, 'min.js');
}

// Main webpack config
module.exports = {
	entry: {
        home_page: './src/pages/home.page.js',
        datepicker_page: './src/pages/components/datepicker.page.js',
        select2_page: './src/pages/components/select2.page.js',
        devs_index_page: './src/pages/devs/index.page.js',
        devs_details_page: './src/pages/devs/details.page.js',
	},
	output: {
		path: outputPath,
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015'] // Transpile the ES6 to es2015 standard
				}
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			}
		]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'  // Resolving the vue var for standalone build
		}
	},
    plugins: [
        new webpack.ProvidePlugin({
            Vue: ['vue/dist/vue.esm.js', 'default'],
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            $: 'jquery',
            moment: 'moment',
        }),
    ] 
};
