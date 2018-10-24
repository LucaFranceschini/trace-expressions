'use strict';

var http = require('http');
var MAX = process.argv[2] || 100;

function request(i) {
    if (i <= MAX) http.request({ port: '8080', method: 'POST' }).end(String(i), function () {
        return request(i + 1);
    });
}
request(1);
