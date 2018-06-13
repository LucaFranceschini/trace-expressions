var express = require('express')
var app = express()

app.get('/',(req,res)=>res.end('Hello world'))

app.listen(8080)
