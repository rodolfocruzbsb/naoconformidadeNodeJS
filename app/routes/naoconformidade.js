
module.exports = function(app){
	return app.get('/naoconformidade/listar', function(req, res){

		//Possivel, pois o express-load carregou esta dependencia no arquivo express.js
		var connection = app.infra.connectionFactory();
		var dao = new app.infra.NaoconformidadeDAO(connection);
		
		dao.lista(function(err, results){
			res.render('naoconformidade/listagem.ejs', {lista: results});
		});
		
		connection.end();
	});	
}
