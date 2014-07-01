var Treinos = require('./models/treinos');
var User = require('./models/usuario');

var session = require('express-session');

module.exports = function(app) {

	app.use(session({ secret: 'appsecret', saveUninitialized: true, resave: true }));

	app.route('/login')
	/*.all(function(req, res, next) {
  // runs for all HTTP verbs first
  // think of it as route specific middleware!
		console.log("entrei no all");
	})*/
	.get(function(req, res, next) {
		console.log("Get - /login");
	})
	.post(function(req, res, next) {
		console.log("POST - /login");
		console.log("req --- "+req);
  	console.log("Login -- Username "+req.body.username+ " Password "+ req.body.password);
			//var user = new User({
				//	username : req.body.username,
					//password : req.body.password
			//});

			User.find({ username : req.body.username, password : req.body.password }, function(err, users) {
				if (err) {
					req.session.logged = false;
					res.send(err);
				}
				if (!users.length) {
					req.session.logged = false;
					console.log("nao encontrou usuario");
				} else {
					console.log("usuario encontrado ");
					users.forEach(function (user) {
						console.log(user.username);
					});
					req.session.logged = true;
					res.send('/inicio');
				}
			});
	});

	app.route('/registrar')
	/*.all(function(req, res, next) {
	// runs for all HTTP verbs first
	// think of it as route specific middleware!
		console.log("entrei no all");
	})*/
	.get(function(req, res, next) {
		console.log("Get - /registrar");
	})
	.post(function(req, res, next) {
		console.log("POST - /registrar");
		console.log("Registration -- Username "+req.body.username+ " Password "+ req.body.password);

		var user = new User({
			username : req.body.username,
			password : req.body.password
		});

		user.save(function(err) {
			if (err)
				res.send(err);

			res.send("Registered successfully");
		});
	});

	app.post('/treino', function(req, res) {

	});

	app.get('/inicio', function(req, res) {
		/*check if user is authenticated */
		if (req.session.logged)
			res.sendfile('./public/home.html');
		else
			res.sendfile('./public/index.html');
	});

	app.get('/logout', function(req, res) {
		req.session.logged = false;
		res.sendfile('./public/index.html');
	});

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};
