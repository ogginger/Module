//Module_ChainParseThenCompose_ReturnsModule.js: Testing logic.

define([
	"Module"
], function(
	Module
) {
	return {
		"Name":"Module_ChainParseThenCompose_ReturnsModule",
		"Input": {
			"Object": Module(),
			"ParseOptions": "define([], function() {});",
			"ComposeOptions": {
				"Dependencies": ["dep"],
				"Exports": ["dep"]
			}
		},
		"Function": function( Input ) {
			return Input.Object.parse(Input.ParseOptions).compose(Input.ComposeOptions);
		},
		"ExpectedOutput": 'define(["dep"], function(dep) {});'
	};
});
