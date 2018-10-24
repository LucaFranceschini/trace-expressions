'use strict';

var http = require('http');

function request(i) {
    if (i <= 1000) http.request({ port: '8080', method: 'POST' }).end(String(i), function () {
        return request(i + 1);
    });
}
request(1);
