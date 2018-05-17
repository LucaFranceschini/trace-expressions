'use strict';

/*
Class http.ServerResponse
method response.write(chunk[, encoding][, callback])

Note that in the http module, the response body is omitted when the request is a HEAD request. Similarly, the 204 and 304 responses must not include a message body.
*/

const http = require('http');

const options = {
	method: 'HEAD',
	port: 8080
};

const req = http.request(options);
// BUG! body is ignored in HEAD requests
req.end('hello', () => console.log('body sent!'));
