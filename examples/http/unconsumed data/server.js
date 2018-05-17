'use strict';

const http = require('http');

// prepare (a lot of) data to send in replies
const data = String(new Array(10000000));

const server = http.createServer((req, res) => {
	// just send data
	res.end(data);
});

server.listen(8080);
