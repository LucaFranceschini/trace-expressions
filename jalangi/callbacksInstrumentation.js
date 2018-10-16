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

function monitoredName(data) { // DA: Oct 1, 2018, optimization to monitor functions with names with initParams.names
    return data.event.startsWith('cb') || !J$.initParams.names || J$.initParams.names.includes(data.functionName);
}

function beforeFunction(data,sender) { // added sender to test async communication (Davide)
	/*if (!functions.includes(data.functionObject))
		return data*/

  //if(!filteredFunctionNames.includes(data.functionName)) return data
  
  /*if (data.functionName === 'emit') {
  	console.log(data.arguments[0] + ' EMITTED BY SERVERRESPONSE AT')
  	console.log(data.location)
  }*/

    // check for callbacks in the last argument

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

    if(monitoredName(data)) // DA: Oct 1, 2018, optimization to monitor names with initParams.names
	monitor.sendEvent(data,sender); // added sender to test async communication (Davide)
	
	return data;
}

function isInSupportedModule(data) {
	return supportedModules.some((m, i, a) => data.functionName.startsWith(m));
}

function afterFunction(data,sender) { // added sender to test async communication (Davide)
    //	check if it is a callback
    if(J$.initParams.func_post){
    	if (data.functionObject._jalangi_callId) {
    	    data.callId = data.functionObject._jalangi_callId;
    	    data.event = 'cb_post';
    	}
    	else
    	    data.event = 'func_post';	
	if(monitoredName(data)) // DA: Oct 1, 2018, optimization to monitor names with initParams.names
	    monitor.sendEvent(data,sender); // added sender to test async communication (Davide)
    }	
	return data;
}
