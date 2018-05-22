'use strict';

var http = require('http');

var server = http.createServer(function (req, res) {
	console.log('header content-length: %i', req.headers['content-length']);
	req.on('data', function (chunk) {
		return console.log('received chunk of length %i', chunk.length);
	});
	req.on('end', function () {
		return res.end('ok');
	});
});

server.listen(8080);
