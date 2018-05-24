'use strict';

/*
Class: http.ClientRequest

Note: Node.js does not check whether Content-Length and the length of the body which has been transmitted are equal or not.
*/

const max_requests=Number(process.argv[2]) || 10
const http = require('http');

const data = "hello, world!";

const options = {
	headers: {
		'content-length': Buffer.byteLength(data)
	},
	method: 'POST',
	port: '8080'
};

let time0
let requests=0

/* ignores server response */ 
function request(){
    let req=http.request(options)
    req.end(() => {
	requests++
	if(requests<max_requests)
	    setTimeout(request,0)
	else {
	    let time=(Date.now()-time0)/1000
	    console.log(`Requests: ${requests} Time (sec):${time} RPS: ${max_requests/time}`)
	    process.exit()
	}
    })
    req.on('error', e => console.error(e.message))
}

time0=Date.now()
request()
