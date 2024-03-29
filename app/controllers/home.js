var mongoose 		= require('mongoose'),
	ArticleModel	= mongoose.model('Article'),
	ServiceModel	= require('../models/services'),
	ClientModel		= require('../models/clients');

exports.index = function (req, res){
	var Articles = ArticleModel.find(function (err, articles){
		if(err) throw new Error(err);
	});
	res.render('home/index', {
		title: 'Business, Inc',
		services: ServiceModel.services,
		clients: ClientModel.clients,
		articles: Articles.articles
	});
};