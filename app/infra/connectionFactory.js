var mysql = require('mysql');

var urlConn = process.env.CLEARDB_DATABASE_URL;

var grupos = urlConn ? urlConn.match(/mysql:\/\/(.*):(.*)@(.*)\/(.*)\?reconnect=true/) : "";

var connectMYSQL = function() {
	if (!process.env.NODE_ENV) {
		console.log('>>>>>>>>>>>>>>>>>> BANCO DE DADOS DE DESENVOLVIMENTO');
		return mysql.createConnection({
			host : 'localhost',
			user : 'root',
			password : 'qwe123',
			database : 'naoconformidade'
		});
	}

	if (process.env.NODE_ENV == 'production') {
		console.log('>>>>>>>>>>>>>>>>>> BANCO DE DADOS DE PRODUCAO');
		return mysql.createConnection({
			host : grupos[3],
			user : grupos[1],
			password : grupos[2],
			database : grupos[4]
		});
	}
	
	if (process.env.NODE_ENV == 'test') {
		console.log('>>>>>>>>>>>>>>>>>> BANCO DE DADOS DE TESTE');
		return mysql.createConnection({
			host : 'localhost',
			user : 'root',
			password : 'qwe123',
			database : 'naoconformidade_test'
		});
	}
	
}

// Wrapper: Feito desta forma para que a inicialização seja tardia da conexão
module.exports = function() {
	return connectMYSQL;
}