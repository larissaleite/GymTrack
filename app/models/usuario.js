var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	username : String,
	password : String
});

var userModel = mongoose.model('User', userSchema);

module.exports = userModel;