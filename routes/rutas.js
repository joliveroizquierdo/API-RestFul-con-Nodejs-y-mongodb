var express = require('express');
var router = express.Router();

var controllers     = require('../controllers/mangas');


router.route('/mangas')
	.post(controllers.insertarManga)
	.get(controllers.listarMangas);

router.route('/manga/:manga_id')
	.get(controllers.descripcionManga)
	.put(controllers.actualizarManga)
	.delete(controllers.eliminarManga);


module.exports = router;
