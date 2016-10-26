//the directory name,  the filename extension string and a callback function, in that order

module.exports = function (dir, extension, callback) {
	var fs = require('fs')
	const path = require('path');

	fs.readdir(dir, function callBacki(err, list) {
		if (err)  
           return callback(err);

		var uusilist = [];
    	for(i=0;i<list.length;i++){
    		element = list[i];
    		if(path.extname(element) == ("." + extension)){
    			uusilist.push(element);
    		}
    	}
    	
    	callback(null, uusilist);
	});
} 
