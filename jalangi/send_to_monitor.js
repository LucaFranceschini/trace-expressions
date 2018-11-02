const WebSocket = require('ws');
const ws = new WebSocket('ws://localhost:8081',{perMessageDeflate:false});
ws.ready = false; // socket initially not ready for sending an event
ws.queue=[]; // event queue
ws.log = false; // if set, logs event queue length
ws.STEP = 1000; // only STEP*k queue sizes are logged 
	    
const stringify = require('./stringify-trunc'); // manage cycles and getters correctly
	
ws.newEvent = // manages newly detected event
function (data){
    if(this.ready && this.queue.length===0)
	this.sendEvent(data);
    else{
	this.queue.push(data);
	this.log();
    }
}

ws.sendEvent = // sends data to monitor with websocket
function(data){
    this.ready=false;
    this.send(data,()=>ws.onReady());
}
	
ws.log = // logs queue size if required
function(){
    if(this.log && this.queue.length % this.STEP===0)
	console.log(`queue: ${this.queue.length}`);
}

ws.onReady = // callback to execute when the websocket connection is ready
function (){
    this.ready=true; 
    if(this.queue.length>0)
	this.sendEvent(this.queue.shift());
}

ws.on('error',err=>console.error(`error: ${err.message}`));
ws.on('open', ()=>ws.onReady());
ws.on('message',data=>{}); // do nothing for the moment in reaction to monitor's reply
// possible more elaborated action
// ws.on('message',data=>{
//     try{
// 	if(JSON.parse(data).error)
// 	    console.error('Illegal event detected');
//     }
//     catch(e){
// 	console.error('Fatal error: illegal JSON data sent by the monitor');
//     }
// });
// end websocket setting


process.on('message',data => ws.newEvent(data)); 
/* the following line is necessary when the client is instrumented; in that case the child is still connected with
the Prolog server and hence it does not terminate */ 
process.on('disconnect',()=>process.exit(0)); 
