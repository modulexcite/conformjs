var conform = require('../conform');
var utils = require('../conform-utils');

describe("basic conformation", function() {

	it("should conform null to null", function () {
		var input = null;
		var spec = null;
		var result = conform(input).to(spec);
		expect(result).toBeNull();
	});

	it("conform should return a conformation input", function() {
		var input = null;
		var result = conform(input);
		expect(utils.getInstanceTypeName(result)).toBe('ConformationInput');
	});

	it("should conform a number to a number", function() {
		var input = 23;
		var spec = "Number";
		var result = conform(input).to(spec);
		expect(result).toBe(23);
	});

	it("should not conform a number to a string", function() {
		var input = 23;
		var spec = "String";
		var test = function() { conform(input).to(spec); };
		expect(test).toThrow();
	});
});