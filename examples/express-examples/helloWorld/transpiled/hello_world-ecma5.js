var express = require('../../instrumentation/node_modules/express')
var app = express()

app.get('/',(req,res)=>res.end('Hello world'))

app.listen(8080)
