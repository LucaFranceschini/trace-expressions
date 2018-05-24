'use strict';

/*
Class http.ServerResponse
method response.writeHead(statusCode[, statusMessage][, headers])

This method must only be called once on a message and it must be called before response.end() is called.

If response.write() or response.end() are called before calling this, the implicit/mutable headers will be calculated and call this function.

When headers have been set with response.setHeader(), they will be merged with any headers passed to response.writeHead(), with the headers passed to response.writeHead() given precedence.
*/

const http = require('http');
const max_requests=Number(process.argv[2]) || 10

const options = {
	port: 8080
}

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
