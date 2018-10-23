'use strict';

const monitor = require('./monitor.js');

exports.before = beforeFunction;
exports.after = afterFunction;

const supportedModules = ['fs','http'];

//const filteredFunctionNames = ['http.createServer','write','writeHead','end']

// collect all http.ServerResponse (possibly inherited) methods
const http = require('http')
const functions = []
const response = http.ServerResponse.prototype
for (const k in response) {
	const obj = response[k]
	if (typeof obj === 'function')
		functions.push(obj)
}

function skip(data) { // optimization to monitor functions with names with initParams.names
    return !data.functionObject._jalangi_callId && J$.initParams.names && !J$.initParams.names.includes(data.functionName);
}

function beforeFunction(data,ws) { 
    if(skip(data)) // optimization to monitor names with initParams.names
	return data;
    const args = data.arguments, argc = args.length;
    if (argc > 0 && typeof args[argc-1] === 'function' && isInSupportedModule(data)) {
	const cb = args[argc-1];
	// wrap the callback and store the call ID
	function wrapper() {
	    cb._jalangi_callId = data.callId;
	    return cb.apply(data.target, arguments);
	}
	args[argc-1] = wrapper;
    }
    // check if this function is a callback
    if (data.functionObject._jalangi_callId) {
	data.callId = data.functionObject._jalangi_callId;
	data.event = 'cb_pre';
    }
    else
	data.event = 'func_pre';
    ws.newEvent(data);
    return data;
}

function isInSupportedModule(data) {
	return supportedModules.some((m, i, a) => data.functionName.startsWith(m));
}

function afterFunction(data,ws) { 
    if(!J$.initParams.func_post || skip(data))
	return data;
    if (data.functionObject._jalangi_callId) {
    	data.callId = data.functionObject._jalangi_callId;
    	data.event = 'cb_post';
    }
    else
    	data.event = 'func_post';	
    ws.newEvent(data); 
    return data;
}
