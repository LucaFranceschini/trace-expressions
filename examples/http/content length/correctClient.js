'use strict';

/*
Class: http.ClientRequest

Note: Node.js does not check whether Content-Length and the length of the body which has been transmitted are equal or not.
*/

const http = require('http');

const data = "hello, world!";

const options = {
	headers: {
		'content-length': Buffer.byteLength(data)
	},
	method: 'POST',
	port: '8080'
};

const req = http.request(options, res => {
	res.setEncoding('utf8');
	res.on('data', console.log);
});

req.end(data);
