var utils = require('../conform-utils');

describe("conformation utilities", function() {

	it("must be able to identify string type name", function () {
		var instance = "string";
		var result = utils.getInstanceTypeName(instance);
		expect(result).toBe("String");
	});

	it("must be able to identify number type name", function() {
		var instance = 23;
		var result = utils.getInstanceTypeName(instance);
		expect(result).toBe("Number");
	});

	it("must be able to identify array type name", function() {
		var instance = [1, 2, 3];
		var result = utils.getInstanceTypeName(instance);
		expect(result).toBe("Array");
	});

	it("must be able to identify object type name", function() {
		var instance = {};
		var result = utils.getInstanceTypeName(instance);
		expect(result).toBe("Object");
	});

	it("must be able to identify class type name", function() {

		function TestClass() {}

		var instance = new TestClass();
		var result = utils.getInstanceTypeName(instance);
		expect(result).toBe("TestClass");
	});
});