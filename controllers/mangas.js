var mangas     = require('../models/mangas');

exports.insertarManga = function(req, res) {
		
		var manga = new mangas();
			manga.nombre = req.body.nombre;

			manga.save(function(err) {
				if (err)
					res.send(err);

				res.json({mensaje:'Se guardo con ajax'});
		});
		
	}

exports.listarMangas = function(req, res) {

		mangas.find(function(err, listado) {
			if (err)
				res.send(err);

			res.json(listado);
		});

}

exports.descripcionManga = function(req, res) {

		mangas.findById(req.params.manga_id, function(err, doc) {
			if (err)
				res.send(err);

			res.json(doc);
		});
}

exports.actualizarManga = function(req, res) {

		mangas.findById(req.params.manga_id, function(err, doc) {

			if (err)
				res.send(err);

			doc.nombre = req.body.nombre;

			doc.save(function(err) {
				if (err)
					res.send(err);

				res.json({mensaje:'Se actualizo con ajax'});
			});

		});
	}

exports.eliminarManga = function(req, res) {
		mangas.remove({_id: req.params.manga_id}, 
			function(err) {
				if (err)
					res.send(err);

				res.json({mensaje:'Se elimino con ajax'});
		});
}