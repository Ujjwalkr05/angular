var excel = require('exceljs');
var express = require('express');
var app = express();


app.get('/', function (req, res) {
   try {
	
		var workbook = new excel.Workbook();
        var worksheet = workbook.addWorksheet('My Sheet');

        worksheet.columns = [
            { header: 'Id', key: 'id', width: 10 },
            { header: 'Name', key: 'name', width: 32 },
            { header: 'D.O.B.', key: 'DOB', width: 10 }
        ];
        worksheet.addRow({id: 1, name: 'John Doe', dob: new Date(1970,1,1)});
        worksheet.addRow({id: 2, name: 'Jane Doe', dob: new Date(1965,1,7)});
		
		var fileName = 'FileName.xls';

		res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
		res.setHeader('Content-Disposition', 'attachment; filename=Report.xlsx');

		workbook.xlsx.write(res)
		.then(function() {
          res.end();
        });

		
	} catch(err) {
        console.log('OOOOOOO this is the error: ' + err);
    }
	
	//https://github.com/SheetJS/js-xlsx/issues/217
})

var server = app.listen(2222, function () {
  console.log("Listening on http://127.0.0.1:2222/");
})
