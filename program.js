var http = require('http'); 
var fs = require('fs');

var server = http.createServer(function (request, response) {  
	//var fstream = fs.createReadStream(process.argv[2]);
	//fstream.pipe(response);
	//response.end();

	//response.setEncoding("utf8");
    var filename = process.argv[3];

  	// This line opens the file as a readable stream
  	var readStream = fs.createReadStream(filename);

  	// This will wait until we know the readable stream is actually valid before piping
  	readStream.on('open', function () {
    // This just pipes the read stream to the response object (which goes to the client)
    	readStream.pipe(response);
    	//response.end();
  	});
  	
  	readStream.on('error', function(err) {
    	response.end(err);
  	});

})  
server.listen(process.argv[2])  