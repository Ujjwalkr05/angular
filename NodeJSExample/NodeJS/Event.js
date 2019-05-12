var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the eventhandler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');

//Create an event handler:
var myEventHandler1 = function () {
    console.log('I hear a scream123!');
  }

//Assign the eventhandler to an event:
eventEmitter.on('song', myEventHandler1);

//Fire the 'scream' event:
eventEmitter.emit('song');