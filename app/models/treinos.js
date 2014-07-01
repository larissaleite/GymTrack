var mongoose = require('mongoose');

var treinosSchema = new mongoose.Schema({
	data : Date,
	tipo : String,
	exercicios : [{
		nome : String,
		series : [{
			carga : Number,
			repeticoes : Number,
			quantidade : Number
		}]
	}]
});

var Treino = mongoose.model('Treino', treinosSchema);

module.exports = Treino;
