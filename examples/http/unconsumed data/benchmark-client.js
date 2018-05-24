'use strict';

/*
Class: http.ClientRequest and http.request()

If no 'response' handler is added, then the response will be entirely discarded. However, if a 'response' event handler is added, then the data from the response object *must* be consumed, either by calling response.read() whenever there is a 'readable' event, or by adding a 'data' handler, or by calling the .resume() method. Until the data is consumed, the 'end' event will not fire. Also, until the data is read it will consume memory that can eventually lead to a 'process out of memory' error.
*/

const http = require('http');
const max_requests=Number(process.argv[2]) || 10

const options = {
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
