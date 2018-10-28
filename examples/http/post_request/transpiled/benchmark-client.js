'use strict';

var http = require('http');
var MAX = process.argv[2] || 10;

var time0 = void 0;
var requests = 0;

function request(i) {
    if (i <= MAX) http.request({ port: '8080', method: 'POST' }).end(String(i), function () {
        requests++;
        return request(i + 1);
    });else {
        var time = (Date.now() - time0) / 1000;
        console.log('Requests: ' + requests + ' Time (sec):' + time + ' RPS: ' + MAX / time);
        process.exit();
    }
}

time0 = Date.now();
request(1);
