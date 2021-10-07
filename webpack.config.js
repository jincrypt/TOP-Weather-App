const path = require("path");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	devtool: "inline-source-map",
	// Do not minify
	optimization: {
		minimize: false,
	},
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
	},
	target: "node",
	//   module: {
	//     rules: [
	//       {
	//         test: /\.css$/i,
	//         use: ["style-loader", "css-loader"],
	//       },
	//     ],
	//   },
};
