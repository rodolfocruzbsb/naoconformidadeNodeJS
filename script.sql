
create database naoconformidade;

use create naoconformidade;

create table ocorrencia(
   id INT NOT NULL AUTO_INCREMENT,
   descricao VARCHAR(100) NOT NULL,   
   data DATETIME,
   PRIMARY KEY ( id )
);

insert into ocorrencia(descricao, data) values('Sem uso do capacete', NOW());
insert into ocorrencia(descricao, data) values('Sem uso do colete', NOW());
insert into ocorrencia(descricao, data) values('Sem uso de botas', NOW());
insert into ocorrencia(descricao, data) values('Sem uso do capacete', NOW());


select * from naoconformidade.ocorrencia;


-------------- AMBIENTE DE TESTE
create database naoconformidade_test;

use naoconformidade_test;

create table ocorrencia(
   id INT NOT NULL AUTO_INCREMENT,
   descricao VARCHAR(100) NOT NULL,   
   data DATETIME,
   PRIMARY KEY ( id )
);