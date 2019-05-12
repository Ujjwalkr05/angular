var dateformat = require('date-format');

//console.log(format.asString()); //defaults to ISO8601 format and current date.
//console.log(format.asString(new Date())); //defaults to ISO8601 format
//console.log(format.asString('hh:mm:ss.SSS', new Date())); //just the time
date = new Date('2018-07-25')
console.log(">>>>>>>> " + date);
console.log(dateformat.asString('dd-MM-yyyy', date)); //just the time

var str = '25-03-2018';
var dd = str.substring(0,2);
var mm = str.substring(3,5);
var yyyy = str.substring(6,10);
console.log(dd);
console.log(mm);
console.log(yyyy)
newStringDate = yyyy + '-' +  mm + '-' + dd

date = new Date(newStringDate)

console.log(">>>>>>>> " + date);
console.log(dateformat.asString('dd-MM-yyyy', date)); //just the time

//let newDate = format.asString('dd-MM-yyyy', '2018-07-12');
//console.log(newDate);


