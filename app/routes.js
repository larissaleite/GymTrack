var Treinos = require('./models/treinos');
var User = require('./models/usuario')

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	// get all todos
	/*app.get('/treinos', function(req, res) {

		// use mongoose to get all todos in the database
		Treinos.find(function(err, treinos) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(treinos); // return all todos in JSON format
		});
	});

	// create todo and send back all todos after creation
	app.post('/treinos', function(req, res) {

		// create a todo, information comes from AJAX request from Angular
		Treinos.create({
			text : req.body.text,
			done : false
		}, function(err, treino) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			Treinos.find(function(err, treinos) {
				if (err)
					res.send(err)
				res.json(treinos);
			});
		});

	});

	// delete a todo
	app.delete('/treinos/:treino_id', function(req, res) {
		Treinos.remove({
			_id : req.params.treino_id
		}, function(err, treino) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			Treinos.find(function(err, treinos) {
				if (err)
					res.send(err)
				res.json(treinos);
			});
		});
	});*/

	// authentication ---------------------------------------------
	app.get('', function(req, res) {

	});

	// registration submission
	app.post('/registrar', function(req, res) {
		console.log("Registration -- Username "+req.body.username+ " Password "+ req.body.password);
		res.send("User registered");
		/* still needs testing
		User.create({
			username : req.body.username,
			password : req.body.password
		}, function(err, treino) {
			if (err)
				res.send(err);
		});*/
	});

	// login submission
	app.post('', function(req, res) {

	});

	app.get('/inicio', function(req, res) {
		/*check if user is authenticated */
		res.sendfile('./public/home.html');
	});

	app.get('/registrar/treino', function(req, res) {
		res.sendFile('./public/registrarTreino.html')
	});

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};
