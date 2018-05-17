var fs=require('fs')
var MAX=2;

function error(err){
    if(err){
    	error.log(err.message)
    	process.exit(1)
    }
}

fs.open(process.argv[2],'w',0o644,function(err,fd){
    error(err)
    for(var i=1;i<=MAX;i++)
    	fs.write(fd,String(i),error)
    fs.close(fd,error)
})
