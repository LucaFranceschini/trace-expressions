'use strict';

/*
Class http.ServerResponse
method response.write(chunk[, encoding][, callback])

Note that in the http module, the response body is omitted when the request is a HEAD request. Similarly, the 204 and 304 responses must not include a message body.
*/

const http = require('http');

const options = {
	port: 8080
};

const req = http.get(options, res => {
	res.setEncoding('utf8');
	console.log(res.statusCode + ' response received');
	res.on('data', chunk => console.log);
	res.on('end', () => console.log('no more data'));
});
