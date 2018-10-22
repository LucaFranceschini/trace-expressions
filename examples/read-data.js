// extracts RPM data and computes the average
const fs=require('fs');
const readline=require('readline');
const MAX=10; // last MAX considered measurements
let ds=fs.ReadStream(process.argv[2]);
ds.setEncoding('utf8');
const rl = readline.createInterface({input:ds});
let sum=0;
let n=0;
let nums=[];
rl.on('line',line => {
    const words=line.split(':');
    const num=Number(words[words.length-1]);
    if(isNaN(num))
	return;
    if(nums.length>=MAX)
	nums.shift();
    nums.push(num);
});
rl.on('close',() => {sum=0;nums.forEach(el=>{console.log(el);sum+=el}); console.log(`\n${sum/nums.length}`)});
