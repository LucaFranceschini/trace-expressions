const http=require('http')
const cp = require('child_process')
const log = true // logs queue length

const queue=[]

const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'}
}

function log_queue(){
	       if(log && queue.length && queue.length % 1000 === 0) console.log(`queue length:${queue.length}`)
}

function http_request(data,port,callback){
    options.port=port
    options.headers['Content-Length']=Buffer.byteLength(data)
    const req = http.request(options, res => {
	queue.shift()
	log_queue()
	if(queue.length>0)
	    http_request(queue[0],port,callback)
    })
    req.on('error', err => {callback(err)})
    req.on('connect',()=>console.log('connect'))
    req.end(data)
}

function handle_response(err,data){
  if(err) {
    console.log(data)
    console.error(err.message)
}

const port = 8081

process.on('message',data =>
	   {
	       queue.push(data)
	       log_queue()
	       if(queue.length===1)
		   http_request(data,port,handle_response)
	   })
