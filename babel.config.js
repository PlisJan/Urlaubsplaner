module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			[
				"babel-plugin-root-import",
				{
					rootPathSuffix: "./src",
					rootPathPrefix: "@/",
				},
			],
		],
		env: {
			production: {
				plugins: ["react-native-paper/babel"],
			},
		},
	};
};
