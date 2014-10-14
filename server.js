var express    		= require('express');
var bodyParser 		= require('body-parser');
var methodOverride  = require('method-override');

var routes 			= require('./routes/rutas');

var app        		= express();


app.set('views', __dirname + '/views');
//app.set('view engine', 'jade');

app.use(bodyParser());
app.use(methodOverride());
app.use(express.static(__dirname + '/public'));

/*El servidor siempre ejecuta el index de la carpeta que le indique en la linea anterior, se puede evitar usar res.sendfile,
pero en caso de usar otra ruta asi se debe usar. Ejemplo:

app.get('*', function(req, res) {
	res.sendfile('public/views/index.html');
});*/
//Otra opcion es utilizar el codigo de la revista
app.use('/api', routes);


var port = process.env.PORT || 8080;
app.listen(port);
console.log('El servidor está corriendo en el puerto: ' + port);