//Module.js: Model of the amd module.

define([ "parse" , "compose" ], function( parse, compose ) {
    return function() {
        //Has to be returned with in the context of a function call to be a new instance.
        return {
            "Header": undefined,
            "Name": undefined,
            "Dependencies": undefined,
            "Exports": undefined,
            "Content": undefined,
            "Type": undefined,
            "parse": parse,
            "compose": compose
        };
    };
});