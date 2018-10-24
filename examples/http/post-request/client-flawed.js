'use strict';

const MAX=100;
const http = require('http');

for(let i=1; i<=MAX;i++)
    http.request({port:'8080',method:'POST'}).end(String(i));
