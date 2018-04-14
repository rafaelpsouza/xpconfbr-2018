var express = require('express')
var port = 3000;
var selenium = require('selenium-standalone');
 
var app = express();
var server = {};
var seleniumProsses = {};

app.use(express.static('./'));

module.exports = {
  bootstrap: function(done) {   
    server = app.listen(port, () => {
    	console.log('Server is listening on port '+port);
    	selenium.start((err, child)  => {
    		console.log("Starting selenium-standalone");
    		seleniumProsses = child;
    		done();
    	});    	
	  });
  },
  teardown: function(done) {  	
    server.close(() => {
    	console.log('Server closed');
    	seleniumProsses.kill();
    	done();
	});
  }
}
