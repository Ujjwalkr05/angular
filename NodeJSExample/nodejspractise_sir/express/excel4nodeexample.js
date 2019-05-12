
var express = require('express');
var app = express();

var xl = require('excel4node');


app.get('/', function (req, res) {
   try {
	
		//var workbook = new excel.Workbook();
        var wb = new xl.WorkBook();
		var ws = wb.WorkSheet('My Worksheet');

		var myCell = ws.Cell(1, 1);
		myCell.String('Test Value');

		wb.write('./MyExcel.xlsx');
		//workbook.xlsx.write(res);
		//res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
		//res.setHeader("Content-Disposition", "attachment; filename=" + fileName);
		res.end("okk");
	} catch(err) {
        console.log('OOOOOOO this is the error: ' + err);
    }
})

var server = app.listen(2222, function () {
  console.log("Listening on http://127.0.0.1:2222/");
})
