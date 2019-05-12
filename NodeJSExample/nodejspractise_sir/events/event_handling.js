var events = require('events');

var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('Hi from the event handler');
}

var myEventHandler2 = function () {
  console.log('2222222222222222222');
}

//Assign the eventhandler to an event:
eventEmitter.on('hi', myEventHandler);
eventEmitter.on('hi', myEventHandler2);

//Fire the 'scream' event:
eventEmitter.emit('hi');