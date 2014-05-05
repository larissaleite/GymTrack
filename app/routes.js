var Treinos = require('./models/treinos');

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
	app.post('/register', function(req, res) {
		console.log("Registration -- Username "+req.body.username+ " Password "+ req.body.password);
	});

	// login submission
	app.post('', function(req, res) {

	});

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};