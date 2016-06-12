
module.exports = function(app){
	
	app.get('/naoconformidade', function(req, res){

		//Possivel, pois o express-load carregou esta dependencia no arquivo express.js
		var connection = app.infra.connectionFactory();
		var dao = new app.infra.NaoconformidadeDAO(connection);
		
		dao.listar(function(err, results){
			res.format({
				html: function(){					 
					res.render('naoconformidade/listagem.ejs', {lista: results});
				},
				json: function(){
					res.json(results);
				}
			});
		});
		
		connection.end();
	});	
	
	app.get('/naoconformidade/input', function(req, res){
		res.render('naoconformidade/input.ejs');
	});
	
	app.post('/naoconformidade', function(req, res){
		
		var naoconformidade = req.body;

		//Validações possíveis graças ao express-validator :)
		var validatorData = req.assert('data', 'Data é obrigatória');
		validatorData.notEmpty();
		var erros = req.validationErrors();
		if(erros){
			res.sender('naoconformidade/input');
			return;
		}
		
		var connection = app.infra.connectionFactory();
	 
		var dao = new app.infra.NaoconformidadeDAO(connection);
		
		dao.salvar(naoconformidade, function(err, results){
			res.redirect('/naoconformidade');		
		});
	});
}
