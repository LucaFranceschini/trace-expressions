'use strict';

const http = require('http');
const MAX=process.argv[2]||100;

function request(i){
    if(i<=MAX)
	http.request({port:'8080',method:'POST'}).end(String(i),()=>request(i+1));
}
request(1);
