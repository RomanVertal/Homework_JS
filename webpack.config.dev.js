const { merge } = require("webpack-merge");
const baseWebpackConfig = require("./webpack.config");
const PATH = require("./path");

module.exports = merge(baseWebpackConfig, {
	mode: "development",
	devServer: {
		static: {
			directory: PATH.PUBLIC,
		},
		compress: true,
		port: 9000,
		hot: true,
		historyApiFallback: true,
	},
});
