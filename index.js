const svgson = require('svgson');

module.exports = function(content) {
	const callback = this.async();

	svgson.parse(content, {
		compat: true,
		camelCase: true
	})
		.then((result) => {
			callback(null,
`module.exports = ${JSON.stringify(result)};
module.exports['default'] = module.exports;
`
			);
		})
		.catch((err) => {
			callback(err);
		})
};
