
module.exports = function(app){
	var listaNaoconformidade = function(req, res){

		//Possivel, pois o express-load carregou esta dependencia no arquivo express.js
		var connection = app.infra.connectionFactory();
		var dao = new app.infra.NaoconformidadeDAO(connection);
		
		dao.listar(function(err, results){
			res.render('naoconformidade/listagem.ejs', {lista: results});
		});
		
		connection.end();
	};
	
	
	app.get('/naoconformidade/listar', listaNaoconformidade);	
	
	app.get('/naoconformidade/input', function(req, res){
		res.render('naoconformidade/input.ejs');
	});
	
	app.post('/naoconformidade', function(req, res){
		
		var naoconformidade = req.body;			
		
		var connection = app.infra.connectionFactory();
	 
		var dao = new app.infra.NaoconformidadeDAO(connection);
		
		dao.salvar(naoconformidade, function(err, results){
			res.redirect('/naoconformidade/listar');		
		});
	});
}
