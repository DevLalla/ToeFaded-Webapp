module.exports = function (api) {
	api.cache(true);

	const presets = [
		"babel-preset-expo",
		[
			"@babel/preset-env",
			{
				targets: {
					node: "current",
				},
			},
		],
	];

	const plugins = [
		[
			"babel-plugin-module-resolver",
			{
				alias: {
					"^react-native$": "react-native-web",
				},
			},
		],
		"@babel/plugin-proposal-export-namespace-from",
		"react-native-reanimated/plugin",
	];

	return {
		presets,
		plugins,
	};
};
