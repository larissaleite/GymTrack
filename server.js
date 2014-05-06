// set up ======================================================================
var express  = require('express');
var app      = express(); 								// create our app w/ express
var mongoose = require('mongoose'); 					// mongoose for mongodb
var port  	 = process.env.PORT || 8080; 				// set the port
var database = require('./config/database'); 			// load the database config
var connect = require('connect');
app.use(connect.bodyParser()); /* necessary because without this, in routes.js req.body keeps getting undefined for the parameters
// more middleware (executes after routes)
/*app.use(function(req, res, next) {});
// error handling middleware
app.use(function(err, req, res, next) {});*/

// configuration ===============================================================
var db = mongoose.connect('mongodb://127.0.0.1:27017/GymTrack');

// connect to mongoDB database
mongoose.connection.once('connected', function(error){
	if (error) {
		console.log("Error: " + error);
	} else {
		console.log("Connected to the database");
	}
});	


app.use(express.static(__dirname + '/public')); 		// set the static files location /public/img will be /img for users

// routes ======================================================================
require('./app/routes.js')(app);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);