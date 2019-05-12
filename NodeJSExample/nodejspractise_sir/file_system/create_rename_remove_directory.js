var fs = require('fs');
var dir = './tmp';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

fs.rename('./tmp', './tmpdir', function (err) {
  if (err) throw err;
	console.log('renamed complete');
});

fs.rmdir('./tmpdir', function (err) {
  if (err) throw err;
  console.log('successfully deleted /tmp');
});
