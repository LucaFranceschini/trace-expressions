// extracts RPM data and computes the average
const fs=require('fs');
const readline=require('readline');
const MAX=10; // last MAX considered measurements
const ds=fs.ReadStream(process.argv[2]);
const rl = readline.createInterface({input:ds});
const nums=[];
ds.setEncoding('utf8');
rl.on('line',line => {
    const words=line.split(':');
    const num=Number(words[words.length-1]);
    if(isNaN(num))
	return;
    if(nums.length>=MAX)
	nums.shift();
    nums.push(num);
});
rl.on('close',() => {
    let sum=0;
    nums.forEach(el=>{
	console.log(el);
	sum+=el
    });
    console.log(`\n${sum/nums.length}`)
});
