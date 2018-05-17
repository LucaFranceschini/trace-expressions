var fs=require('fs')
var async=require('async')
var MAX=2;

function error(err){
    if(err){
    	error.log(err.message)
    	process.exit(1)
    }
}

fs.open(process.argv[2],'w',0o644,function(err,fd) {
    error(err)
    var i=1;
    async.whilst(
    function f1(){return i<=MAX},
    function f2(cb){fs.write(fd,String(i++),cb)},
    function f3(err){
        error(err)
        fs.close(fd,error)
    })
})
