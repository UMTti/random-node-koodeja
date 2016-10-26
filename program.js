var http = require('http');
var bl = require('bl');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var arr = [];

http.get(url1, function(response) {
  response.setEncoding("utf8");
  response.pipe(bl(function (err, data) { 
  	var str = data.toString();
  	arr[0] = str;
  	if(arr[0] != null && arr[1] != null && arr[2] != null){
  		console.log(arr[0]);
  		console.log(arr[1]);
  		console.log(arr[2]);
  	}
  }));
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});

http.get(url2, function(response) {
  response.setEncoding("utf8");
  response.pipe(bl(function (err, data) { 
  	var str = data.toString();
  	arr[1] = str;
  	if(arr[0] != null && arr[1] != null && arr[2] != null){
  		console.log(arr[0]);
  		console.log(arr[1]);
  		console.log(arr[2]);
  	}
  }));
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});

http.get(url3, function(response) {
  response.setEncoding("utf8");
  response.pipe(bl(function (err, data) { 
  	var str = data.toString();
  	arr[2] = str;
  	if(arr[0] != null && arr[1] != null && arr[2] != null){
  		console.log(arr[0]);
  		console.log(arr[1]);
  		console.log(arr[2]);
  	}
  }));
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});



