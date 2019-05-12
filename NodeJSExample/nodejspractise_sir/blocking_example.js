var fs = require("fs");

/*
	var text = fs.readFileSync("input.txt");
	console.log(text.toString());
	console.log("Program Ended");
*/

var aaa = function(errror, data) {
	if(errror) {
		return console.error(error);
	}
	else {
		return console.log(data.toString());
	}
}

fs.readFile("input.txt", aaa);

console.log("Program Ended");