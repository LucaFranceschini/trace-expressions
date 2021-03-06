'use strict';

/*
Class http.ServerResponse
method response.write(chunk[, encoding][, callback])

Note that in the http module, the response body is omitted when the request is a HEAD request. Similarly, the 204 and 304 responses must not include a message body.
*/

const http = require('http');

const server = http.createServer((req, res) => {
	console.log(req.method + ' request received');
	
	res.writeHead(204);
	res.end();
});

server.listen(8080);
