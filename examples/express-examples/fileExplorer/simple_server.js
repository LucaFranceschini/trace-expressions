const express = require('express')
const morgan = require('morgan');
const responseTime = require('response-time')
const serveIndex = require('serve-index')

const path = process.cwd()

const app = express()

app.use(morgan('combined'))
app.use(responseTime())
app.use('/', express.static(path), serveIndex(path,{'icons': true}))
app.get('/*',(req,res)=>{
    res.writeHead(404,{'Content-Type':'text/html'})
    res.end('Not found\n')
})

app.listen(8080)
