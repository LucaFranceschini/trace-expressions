'use strict';

/*
Class: http.ClientRequest and http.request()

If no 'response' handler is added, then the response will be entirely discarded. However, if a 'response' event handler is added, then the data from the response object *must* be consumed, either by calling response.read() whenever there is a 'readable' event, or by adding a 'data' handler, or by calling the .resume() method. Until the data is consumed, the 'end' event will not fire. Also, until the data is read it will consume memory that can eventually lead to a 'process out of memory' error.
*/

const async = require('async'),
      http = require('http');

const options = {
	port: '8080'
};

// make an async request with the given identifier
function request(i, cb) {
	const req = http.request(options, res => {
		console.log(`STATUS #${i}: ${res.statusCode}`);
		res.on('data', chunk => {});
		res.on('end', () => {
			console.log(`No more data in response #${i}.`);
		});
	});

	req.on('error', e => {
		console.error(`problem with request #${i}: ${e.message}`);
	});

	req.end(cb);
}

// do a lot of requests
const max = 1000;
let i = 0;
async.whilst(
	() => i < max,
	cb => request(i++, cb));
