var utils = require('./conform-utils');

function ConformException(message) {
	this.message = message;
}

module.exports = function(input) {

	// Create a conformation input and return it.
	return new ConformationInput(input);
};

function ConformationInput(input) {
	this.input = input;
}

ConformationInput.prototype.to = function conformTo(spec) {
	
	//	Null to null returns null.
	if(this.input === null && spec === null) {
		return null;
	}

	// If the spec is a string, then the string is the type.
	var specType = utils.getInstanceTypeName(spec);
	if(specType === "String") {
		//	We can only conform if we match types.
		if(utils.getInstanceTypeName(this.input) !== specType) {
			throw new ConformException("Input is not a " + specType);
		}
	}
};

ConformationInput.prototype.check = function conformTo(spec) {
	
};