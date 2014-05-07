var express 	= require('express'),
	mongoose 	= require('mongoose'),
	fs 			= require('fs'),
	config 		= require('./config/config'),
	http 		= require('http'),
	path 		= require('path'),
	app = module.exports = express();

mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});

var modelsPath = __dirname + '/app/models';
fs.readdirSync(modelsPath).forEach(function (file) {
  if (file.indexOf('.js') >= 0) {
    require(modelsPath + '/' + file);
  }
});

require('./config/express')(app, config);
require('./config/routes')(app);

app.listen(config.port);
