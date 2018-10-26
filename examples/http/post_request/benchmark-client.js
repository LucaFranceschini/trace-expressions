'use strict';

const http = require('http');
const MAX = process.argv[2] || 10;

let time0
let requests=0

function request(i) {
    if (i <= MAX) http.request({ port: '8080', method: 'POST' }).end(String(i), function () {
	requests++;
        return request(i + 1);
    });
    else{
	let time=(Date.now()-time0)/1000
	console.log(`Requests: ${requests} Time (sec):${time} RPS: ${MAX/time}`)
	process.exit();
    }
}

time0=Date.now();
request(1);
