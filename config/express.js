var express = require('express');

var load = require('express-load');


module.exports = function(){
	var app = express();

	//Adicionando configuração para o express
	app.set('view engine', 'ejs')
	app.set('views', './app/views');
	
	//Carregamento de modulos a partir do diretorio APP
	load('routes', {cwd: 'app'})
		.then('infra')
		.into(app);
	
	return app;	
}