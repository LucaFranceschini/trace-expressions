'use strict';

exports.sendEvent = trySend;

const queue=[]; // event queue
const depth=4; // truncation depth of stringify
let ready=true; // ready to send to child

function onReady(){
    ready=true;
    if(queue.length>0)
	sendEvent(queue.shift());
}

const stringify = require('./stringify-trunc')

function trySend(data,sender) {
    if(ready)
	sendEvent(data,sender);
    else
	queue.push(data);
}

function sendEvent(data,sender) { // added sender to test async communication (Davide)
	// prepare to send
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
	
    // serialize and send
    ready=false;
    sender.send(stringify(body,{depth:depth}),onReady());
}
