//Module_compose_ReturnsModule.js: Testing logic.

define([
	"Module"
], function(
	Module
) {
	return {
		"Name":"Module_compose_ReturnsModule",
		"Input": {
			"Object": Module(),
			"Module": "define([], function() {});",
			"Options": {
				"Dependencies": ["dep"],
				"Exports": [ "dep" ]
			}
		},
		"Function": function( Input ) {
			Input.Object.parse( Input.Module );
			return Input.Object.compose( Input.Options );
		},
		"ExpectedOutput": 'define(["dep"], function(dep) {});'
	};
});
