function NaoconformidadeDAO(connection){
	this._connection = connection;
}

NaoconformidadeDAO.prototype.listar = function(callback) {
	this._connection.query('SELECT * FROM ocorrencia', callback);
} 

NaoconformidadeDAO.prototype.salvar = function(naoconformidade, callback) {
	this._connection.query('INSERT INTO ocorrencia SET ?', naoconformidade, callback);
} 

module.exports = function() {
	return NaoconformidadeDAO;	
}