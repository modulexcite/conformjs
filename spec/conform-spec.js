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
});