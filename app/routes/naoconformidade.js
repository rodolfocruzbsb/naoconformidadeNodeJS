
module.exports = function(app){
	app.get('/naoconformidade/listar', function(req, res){

		//Possivel, pois o express-load carregou esta dependencia no arquivo express.js
		var connection = app.infra.connectionFactory();
		var dao = new app.infra.NaoconformidadeDAO(connection);
		
		dao.listar(function(err, results){
			res.render('naoconformidade/listagem.ejs', {lista: results});
		});
		
		connection.end();
	});	
	
	app.get('/naoconformidade/input', function(req, res){
		res.render('naoconformidade/input.ejs');
	});
	
	app.get('/naoconformidade/salvar', function(req, res){
		console.log('Esta operação somente é possível via POST');
		res.render('Erro ao processar operação. Esta operação somente é possível via POST!')
	});
	
	app.post('/naoconformidade/salvar', function(req, res){
		
		var naoconformidade = req.body;
		
		console.log(naoconformidade);
		
		var connection = app.infra.connectionFactory();
	 
		var dao = new app.infra.NaoconformidadeDAO(connection);
		
		dao.salvar(naoconformidade, function(err, results){
			dao.listar(function(err, results){
				res.render('naoconformidade/listagem.ejs', {lista: results});
			});			
		});
	});
}
