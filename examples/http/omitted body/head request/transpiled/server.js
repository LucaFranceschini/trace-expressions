'use strict';

/*
Class http.ServerResponse
method response.write(chunk[, encoding][, callback])

Note that in the http module, the response body is omitted when the request is a HEAD request. Similarly, the 204 and 304 responses must not include a message body.
*/

var http = require('http');

var server = http.createServer(function (req, res) {
	console.log(req.method + ' request received');
	req.setEncoding('utf8');
	req.on('data', function (chunk) {
		return console.log('received data: ' + chunk);
	});
	req.on('end', function () {
		return console.log('no more data');
	});

	res.end();
});

server.listen(8080);
