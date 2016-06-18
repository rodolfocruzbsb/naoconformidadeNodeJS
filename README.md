# Cadastro de Não Conformidades - NodeJsCrud
Projeto meramente acadêmico, baseado em NodeJS para cadastro de não conformidades.

## O que temos nesse projeto?
* NodeJS (Claro!)
* MySql (Por enquanto... Será migrado para MongoDB)
* E só....

### Mas da estrutura da App(Node JS), o que vamos usar?
* [Express JS](http://expressjs.com/)
* [EJS](http://www.embeddedjs.com/)
* [socket.io](http://socket.io/)

### Tem teste unitário?
* [mocha](https://mochajs.org/)
* [supertest](https://www.npmjs.com/package/supertest)

## Cadê os prints disso funcionando? Senão nem testo...
Add aqui

## Get Started
Antes de mais nada, é necessário ter instalado em seu PC o [NodeJS](https://nodejs.org/en/) e o [NPM](https://www.npmjs.com/)
Vamos nos certificar que o ambiente esta OK? No terminal execute os seguintes comandos:
'''sh
node -v
```
Saída esperada similar a: v4.4.5

'''sh
npm -v
```
Saída esperada similar a: 2.15.5

Este passo é opcional, mas caso não o faça, vá para o arquivo package.json e substitua de * "start": "nodemon app.js"* para * "start": "node app.js"*, caso deseje utilizar o nodemon e todos os seus recursos vamos seguir . Instalar [nodemon](http://nodemon.io/) e verificar se foi instalado corretamente, conforme:
'''sh
npm install -g nodemon
nodemon -v
'''
Saída esperada similar a: 1.9.2

## Pronto, basta baixar este projeto e executá-lo:
No diretório do projeto, que contém o arquivo package.json execute o seguinte comando:
'''sh
npm start
'''
