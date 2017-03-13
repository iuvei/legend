var crc = require('crc');

module.exports.JsUtil = {
	dataChannel:"dataChannel",
	printObj : function(obj){
		var description = "";
		for(var i in obj){
			var property=obj[i];
			description+=i+" = "+property+"\n";
		}
		console.error(description);
	},
	dispatch : function(seed, array) {
		return array[Math.abs(crc.crc32(seed%array.length))];
	}
};
