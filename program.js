var fs = require('fs')
const path = require('path');

fs.readdir(process.argv[2], function callBacki(err, list) {
	var uusilist = [];
    for(i=0;i<list.length;i++){
    	element = list[i];
    	if(path.extname(element) == ("." + process.argv[3])){
    		console.log(element);
    	}
    }
    
});
