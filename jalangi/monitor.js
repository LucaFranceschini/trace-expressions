'use strict';

exports.sendEvent = sendEvent;

const stringify = require('./stringify-trunc')

// whether to print event info even for accepted events (can be a lot of stuff)
const DEBUG = false;

const stringify = require('./stringify-trunc'), // handles cyclic objects
      syncReq = require('sync-request'),
      util = require('util');

// when a getter is found, store it in getters and delete it from the object
function replacer(key, value, getters) {
	// exclude (hidden) properties starting with _ in serialization
	if (key.startsWith('_'))
		return undefined;

	// nothing else to do for null, primitives and arrays
	if (value === null || typeof value !== 'object' || Array.isArray(value))
		return value;

	// exclude getters from serialization, they can have side-effects... but remember
	for (const name of Object.keys(value))
	{
		const desc = Object.getOwnPropertyDescriptor(value, name);

		if (desc.get) {
			getters.push({object: value, name: name, descriptor: desc});
			const res = delete value[name];
		}
	}
	return value;
}

function restoreGetters(getters) {
	for (const {object:o, name:n, descriptor:d} of getters)
		Object.defineProperty(o, n, d);
}

function sendEvent(data,sender) { // added sender to test async communication (Davide)
	// prepare to sending
	const body = {
		event: data.event,
		name: data.functionName,
		id: data.callId,
		res: data.result,
		args: Object.values(data.arguments),  // make it an array
		targetId: data.targetId,
		resultId: data.resultId
	};

	// serialize and send
	// do not use json option, automatic serialization crashes on circular objects

	// list of object pairs {descriptor, getter} to be restored
	const getters = [];

	// closure over getters (JSON.stringify needs a a function replace(k, v))
	function replacerClosure(key, value) {
		return replacer(key, value, getters);
	}

	const serialized = stringify(body, replacerClosure);

	restoreGetters(getters);



	// send
	const options = {
		headers: { 'Content-type': 'application/json' },
		body: serialized
	},



	    res = syncReq('POST', 'http://localhost:8081', options),
	    // TODO this crashes on server errors, could check status >= 300
	    resObj = JSON.parse(res.getBody()),
	    error = resObj.error;

	const toPrint = util.inspect(body);

	if (error)
		console.error('ERROR %s', toPrint);
	else if (DEBUG)
		console.error('OK %s', toPrint);
	// if no errors and no debug mode, don't print anything

    sender.send(stringify(body,{depth:5}))
}
