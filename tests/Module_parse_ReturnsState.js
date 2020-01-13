//Module_Input_Behavior.js: Testing logic.

define([
	"Module"
], function(
	Module
) {
	return {
		"Name":"Module_Input_Behavior",
		"Input": "define([], function() {});",
		"Function": function( Input ) {
			return Module().parse( Input );
		},
		"Comparator": { "Object": true },
		"ExpectedOutput": {
			"Header": "",
			"Name": undefined,
			"Dependencies": [],
			"Exports": undefined,
			"Content": "function() {}"
		},
		"Debug": false
	};
});
