//test_Module.js: Testing Logic.

define([
  "TestSuite",
  "log",
  "Module",
  "tests/Module_parse_ReturnsState",
  "tests/Module_compose_ReturnsModule",
  "tests/Module_ChainParseThenCompose_ReturnsModule"
], function(
  TestSuite,
  log,
  Module,
  Module_parse_ReturnsState,
  Module_compose_ReturnsModule,
  Module_ChainParseThenCompose_ReturnsModule
) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_Module initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "Module" );
        xTestSuite.add( Module_parse_ReturnsState ); 
        xTestSuite.add( Module_compose_ReturnsModule );
        xTestSuite.add( Module_ChainParseThenCompose_ReturnsModule );
      xTestSuite.test();
    }
  });
});
