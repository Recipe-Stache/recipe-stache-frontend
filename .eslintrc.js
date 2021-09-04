module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'plugin:react/recommended',
		'standard'
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 12,
		sourceType: 'module'
	},
	plugins: [
		'react'
	],
	ignorePatterns: ['App.js', 'reportWebVitals.js', 'index.js'],
	rules: {
		'no-tabs': ['warn', { allowIndentationTabs: true }],
		indent: [1, 'tab'],
		semi: [1, 'always'],
		'space-before-function-paren': ['warn', 'never']
	}
};
