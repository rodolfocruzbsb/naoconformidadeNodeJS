var mysql = require('mysql');

var connectMYSQL = function() {
	return mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : 'qwe123',
		database : 'naoconformidade'
	});
}

//Wrapper: Feito desta forma para que a inicialização seja tardia da conexão
module.exports = function(){
	return connectMYSQL;
}