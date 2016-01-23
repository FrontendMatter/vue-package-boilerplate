var path = require('path')
var WebpackConfig = require('themekit-webpack-config')
var config = new WebpackConfig()
	.withStandaloneEntry('{{ name }}')
	.withLibrary('{{ library }}')
	.withAlias({
		'{{ name }}': path.resolve(__dirname, '..')
	})
	.webpack({
		externals: []
	})
	.use('extract')

module.exports = config