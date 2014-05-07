var mongoose 		= require('mongoose'),
	ArticleModel	= mongoose.model('Article'),
	ServiceModel	= require('../models/services'),
	ClientModel		= require('../models/clients');

exports.index = function (req, res){
	res.render('home/index', {
		title: 'Wotif',
		services: ServiceModel.services,
		clients: ClientModel.clients,
		articles: articles
	});
};

exports.clients = function (req, res){
	res.render('home/index', {
		clients: ClientModel.clients
	});
};

exports.services = function (req, res){
	res.render('home/index', {
		services: ServiceModel.services
	});
};