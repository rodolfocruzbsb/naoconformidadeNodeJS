var app = require('./config/express')();

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('io', io);

//Caso não tenha porta definida na variável de ambiente(definida pelo heroku), usa a 3000
var port = process.env.PORT || 3000;

http.listen(port, function(){
	console.log('Servidor moendo... manda bala! =)');
});