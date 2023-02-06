module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,mp3,jpg,js,glb,bin,gltf,ico,html,webmanifest}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	maximumFileSizeToCacheInBytes: 20 * 1024 * 1024,
};