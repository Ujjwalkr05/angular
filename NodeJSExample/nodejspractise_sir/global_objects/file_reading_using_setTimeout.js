var fs = require("fs");
 
var fileReadFunction = function(err, data) {
    console.log("File reading call back function \n " + data);
}
 
function callReadFile() {
    fs.readFile("login.html", fileReadFunction);
}
 
//setTimeout(callReadFile, 5000);
 
setInterval(callReadFile, 5000);