//build.js: Configuration file for optimizing the ifSetup function. 
/*
*/ 
({
    paths: {
        "underscore": "lib/underscore.min",
		"parse": "Functions/parse/parse",
		"validate": "Functions/parse/lib/validate.min",
		"parseValidation": "Functions/parse/parseValidation",
		"compose": "Functions/compose/compose",
		"composeValidation": "Functions/compose/composeValidation"
    },
    exclude: [ "underscore" ],
    name: "Module",
    out: "module.min.js"
})
