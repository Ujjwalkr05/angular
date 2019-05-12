var childProcess = require('child_process');  

childProcess.exec('my.bat', (exception, stdout, stderr) => {  
  if (exception) {  
    console.error(exception);  
    return;  
  }  
  console.log(stdout);  
}); 
