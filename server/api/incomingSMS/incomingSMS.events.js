/**
 * IncomingSMS model events
 */

'use strict';

import {EventEmitter} from 'events';
var IncomingSMS = require('./incomingSMS.model');
var IncomingSMSEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
IncomingSMSEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  IncomingSMS.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    IncomingSMSEvents.emit(event + ':' + doc._id, doc);
    IncomingSMSEvents.emit(event, doc);
  }
}

export default IncomingSMSEvents;
