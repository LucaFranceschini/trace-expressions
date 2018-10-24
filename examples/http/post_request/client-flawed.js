'use strict';

const http = require('http');
const MAX=process.argv[2]||100;

for(let i=1; i<=MAX;i++)
    http.request({port:'8080',method:'POST'}).end(String(i));
