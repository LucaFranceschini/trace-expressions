'use strict';

/*
Class: http.ClientRequest and http.request()

If no 'response' handler is added, then the response will be entirely discarded. However, if a 'response' event handler is added, then the data from the response object *must* be consumed, either by calling response.read() whenever there is a 'readable' event, or by adding a 'data' handler, or by calling the .resume() method. Until the data is consumed, the 'end' event will not fire. Also, until the data is read it will consume memory that can eventually lead to a 'process out of memory' error.
*/

var http = require('http');
var max_requests = Number(process.argv[2]) || 10;

var options = {
			port: '8080'
};

var time0 = void 0;
var requests = 0;

/* ignores server response */
function request(i) {
			var req = http.request(options, function (res) {
						console.log('STATUS #' + i + ': ' + res.statusCode);
						res.on('data', function (chunk) {});
						res.on('end', function () {
									console.log('No more data in response #' + i + '.');
						});
			});
			req.end(function () {
						requests++;
						if (requests < max_requests) setTimeout(function () {
									return request(i + 1);
						}, 0);else {
									var time = (Date.now() - time0) / 1000;
									console.log('Requests: ' + requests + ' Time (sec):' + time + ' RPS: ' + max_requests / time);
									process.exit();
						}
			});
			req.on('error', function (e) {
						return console.error('problem with request #' + i + ': ' + e.message);
			});
}

time0 = Date.now();
request(1);
