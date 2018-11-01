'use strict';

exports.sendEvent = sendEvent;

const stringify = require('./stringify-trunc')

function sendEvent(data,sender) { // added sender to test async communication (Davide)
	// prepare to sending
	const body = {
	    event: data.event,
	    name: data.functionName,
	    id: data.callId,
	    res: data.result,
	    args: Object.values(data.arguments),  // make it an array
	    targetId: data.targetId,
	    resultId: data.resultId,
	    argIds: data.argIds
	};	
    sender.send(stringify(body,{depth:5}))
}
