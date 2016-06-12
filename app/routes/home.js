module.exports = function(app){
	
	app.get('/', function(req, res){
		var connection = app.infra.connectionFactory();
		var dao = new app.infra.NaoconformidadeDAO(connection);
		
		dao.listar(function(err, results){
			
			if(err){
				
				return next(err);
			}
			
			res.render('home/index', {lista: results});

		});
		
		connection.end();
	});
	
	app.post('/login', function(req, res){
		
		var login = req.body;				
		
		console.log(login);
		
		if(login.perfil == 'AUDITOR'){
			
			res.redirect('/naoconformidade/input');		
		}else if(login.perfil == 'FISCAL'){
			
			res.redirect('/naoconformidade');		
		}
		
	});
}