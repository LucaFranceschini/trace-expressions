'use strict';

/*
Class: http.ClientRequest

Note: Node.js does not check whether Content-Length and the length of the body which has been transmitted are equal or not.
*/

var http = require('http');

var data = "hello, world!";

var options = {
	headers: {
		'content-length': Buffer.byteLength(data)
	},
	method: 'POST',
	port: '8080'
};

var req = http.request(options, function (res) {
	res.setEncoding('utf8');
	res.on('data', console.log);
});

req.end(data);
