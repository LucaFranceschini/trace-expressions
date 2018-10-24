'use strict';

const http = require('http');

function request(i){
    if(i<=1000000)
	http.request({port:'8080',method:'POST'}).end(String(i),()=>request(i+1));
}
request(1);
