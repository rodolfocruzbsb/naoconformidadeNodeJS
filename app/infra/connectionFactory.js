var mysql = require('mysql');

var connectMYSQL = function() {
	if(!process.env.NODE_ENV){
		
		return mysql.createConnection({
			host : 'localhost',
			user : 'root',
			password : 'qwe123',
			database : 'naoconformidade'
		});
	}if(process.env.NODE_ENV = 'test'){
		
		return mysql.createConnection({
			host : 'localhost',
			user : 'root',
			password : 'qwe123',
			database : 'naoconformidade_test'
		});
	}
}

//Wrapper: Feito desta forma para que a inicialização seja tardia da conexão
module.exports = function(){
	return connectMYSQL;
}