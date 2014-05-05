var mongoose = require('mongoose');

var treinosSchema = new mongoose.Schema({
	data : Date,
	tipo : String,
	exercicios : {
		nome : String,
		series : {
			carga : Number,
			repeticoes : Number,
			quantidade : Number
		}
	}
});

var treinosModel = mongoose.model('Treinos', treinosSchema);

module.exports = treinosModel;