module.exports.getInstanceTypeName = function getInstanceTypeName(instance) {

	// Get the constructor name to get the type name.
	var funcNameRegex = /function (.{1,})\(/;
    var results = (funcNameRegex).exec((instance).constructor.toString());
    return (results && results.length > 1) ? results[1] : "";
};