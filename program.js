var net = require('net');

 //"YYYY-MM-DD hh:mm"  

var net = require('net')  
var server = net.createServer(function (socket) {  
    Number.prototype.padLeft = function(base,chr){
    	var len = (String(base || 10).length - String(this).length)+1;
    	return len > 0? new Array(len).join(chr || '0')+this : this;
	}

	var d = new Date,
    dformat = [d.getFullYear(), (d.getMonth()+1).padLeft(),
               d.getDate().padLeft()].join('-') +' ' +
              [d.getHours().padLeft(),
               d.getMinutes().padLeft()].join(':');
    socket.end(dformat + "\n");

})  
server.listen(process.argv[2])  