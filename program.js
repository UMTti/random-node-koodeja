var http = require('http'); 
var fs = require('fs');
var map = require('through2-map');
var moment = require('moment')

//2013-08-10T12:10:15.474Z

function parseDate(urli){
	 var stri = urli.split("?");
     var klockan = stri[1].split("=")[1];
     var d = new Date(klockan);
     return d;
}
var server = http.createServer(function (req, response) {  
  if(req.url.includes("/api/parsetime")) {
     var d = parseDate(req.url);

	 response.setHeader('Content-Type', 'application/json');
     response.write(JSON.stringify({ "hour": d.getHours(), "minute": d.getMinutes(), "second":d.getSeconds() }));
     response.end();
     return;
  }

  if(req.url.includes("/api/unixtime")) {
    var d = parseDate(req.url);

	response.write(JSON.stringify({ "unixtime": d.getTime() }));
    response.end();
    return;
  }

})  
server.listen(Number(process.argv[2]))  