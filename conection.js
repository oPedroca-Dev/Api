import mysql from 'mysql2/promise';

const conectionPizza = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pizzaria'
});

const conectionCarro = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'carro'
});

const conectionLivro = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'livro'
});

const conectionMoto = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'oficina_moto'
});

const conectionFilme = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'filme'
});

const conectionSerie = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'filme'
});

const conectionHospital = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'hospital'
});

const conectionTurma = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'turma'
});

const conectionApple = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'prova'
});

export {
  conectionPizza,
  conectionCarro,
  conectionLivro,
  conectionMoto,
  conectionFilme,
  conectionSerie,
  conectionHospital,
  conectionTurma,
  conectionApple
};