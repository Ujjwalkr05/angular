var fs = require("fs");

var fileReadFunction = function(err, data) {
	console.log("Your file data is : " + data);
}

fs.readFile("mybiodata.txt", fileReadFunction);


