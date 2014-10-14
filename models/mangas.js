var mongoose     = require('mongoose');
	mongoose.connect('mongodb://localhost/mangas');

var mangasSchema   = new mongoose.Schema({
	nombre: String
});

module.exports = mongoose.model('mangas', mangasSchema);