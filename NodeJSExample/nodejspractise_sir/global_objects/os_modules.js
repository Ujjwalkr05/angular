var os = require("os");

// OS type
//console.log('type : ' + os.());

// OS platform
console.log('platform : ' + os.platform());

// Total system memory
console.log('total memory : ' + os.totalmem() + " bytes.");

// Total free memory
console.log('free memory : ' + os.freemem() + " bytes.");
console.log('os.hostname() : ' + os.hostname());

console.log('os.tmpdir() : ' + os.tmpdir());
console.log('os.release() : ' + os.release());

