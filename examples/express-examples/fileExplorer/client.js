const fs = require('fs')
const http = require('http')
const unknown_path = '/zzz'
const max_requests=Number(process.argv[2]) || 10

const options = {
    port: 8080,
}

const dir=process.cwd()

let dir_files
let time0
let requests=0

function random(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min //The maximum is exclusive and the minimum is inclusive
}

function run(err,files){
    if(err)
	console.error('fatal error')
    dir_files=files
    request()
}

/* ignores server response */ 
function request(){
    let i=random(-1,dir_files.length)
    options.path=encodeURI(i<0?unknown_path:'/'+dir_files[i])
    let req=http.request(options)
    req.end(() => {
	requests++
	if(requests<max_requests)
	    setTimeout(request,0)
	else {
	    time=(Date.now()-time0)/1000
	    console.log(`Requests: ${requests} Time (sec):${time} RPS: ${max_requests/time}`)
	    process.exit()
	}
    })
    req.on('error', e => console.error(e.message))
}

/* wait for server response */

// function request(){
//     let i=random(-1,dir_files.length)
//     options.path=encodeURI(i<0?unknown_path:'/'+dir_files[i])
//     let req=http.get(options, res => {
// 	console.log('response received')
// 	requests++
// 	res.on('data', chunk => {
// 	})
// 	res.on('end', () => {
// 	        if(requests<max_requests)
// 		    setTimeout(request,0)
// 	    else {
// 		time=(Date.now()-time0)/1000
// 		console.log(`Requests: ${requests} Time (sec):${time} RPS: ${max_requests/time}`);process.exit()
// 	}
//     })
//     req.on('error', e => console.error(e.message))
//     })
// }

fs.readdir(dir,run)
time0=Date.now()
