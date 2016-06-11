function NaoconformidadeDAO(connection){
	this._connection = connection;
}

NaoconformidadeDAO.prototype.lista = function(callback) {
	this._connection.query('SELECT * FROM ocorrencia', callback);
} 

module.exports = function() {
	return NaoconformidadeDAO;	
}