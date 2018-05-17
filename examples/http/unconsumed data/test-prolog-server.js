const http=require('http')

let targetId=0
let event='data'
let time=Number(process.argv[2]) || Number(process.argv[3]) || 10
let verbose=process.argv[2]==='-v' || process.argv[3]==='-v' 
let postData

let handler=verbose?
    res => {
    	let res_data=''
    	res.on('data', chunk => res_data+=chunk)
    	res.on('end', () => {console.log(`response: ${res_data} postData: ${postData}`); setImmediate(http_request)})
    }
    :
    res=> {
	res.on('data', chunk => {})
	res.on('end', () => {setImmediate(http_request)})
    }

function nextEvent(){
    let prev=event
    if(event==='data')
	event='end'
    else
	event='data'
    return prev
}

function nextTargetId(){
    return event==='end'?targetId:targetId++
}

function http_request()
{
    postData=JSON.stringify({event:'func_pre',name:'on',id:1,args:[nextEvent()],targetId:nextTargetId()})
    let options = {
	port: 8081,
	method: 'POST',
	headers: {
	    'Content-Type': 'application/json',
	    'Content-Length': Buffer.byteLength(postData)
	}
    }
    let req = http.request(options, handler)
    req.on('error', err => {console.error(err.message)})
    req.end(postData)
}

http_request()
setTimeout(()=>{console.log(`RPS: ${targetId*2/time}`);process.exit()},time*1000)
