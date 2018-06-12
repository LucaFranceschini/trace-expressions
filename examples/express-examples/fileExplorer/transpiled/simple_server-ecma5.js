var express = require('../../instrumentation/node_modules/express')
var morgan = require('morgan');
var responseTime = require('response-time')
var serveIndex = require('serve-index')

var path = process.cwd()

var app = express()

app.use(morgan('combined'))
app.use(responseTime())
app.use('/', express.static(path), serveIndex(path,{'icons': true}))
app.get('/*',function(req,res){
    res.writeHead(404,{'Content-Type':'text/html'})
    return res.end('Not found\n')
})

app.listen(8080)
