import mysql from 'mysql2/promise';

const connectionPizza = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pizzaria'
});

const connectionCarro = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'carro'
});

const connectionLivro = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'livro'
});

const connectionAnime = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'anime'
});

const connectionMoto = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'oficina_moto'
});

const connectionFilme = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'filme'
});

const connectionSerie = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'filme'
});

const connectionHospital = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'hospital'
});

const connectionTurma = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'turma'
});

const connectionLoja = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'loja'
});

export {
  connectionPizza,
  connectionCarro,
  connectionLivro,
  connectionAnime,
  connectionMoto,
  connectionFilme,
  connectionSerie,
  connectionHospital,
  connectionTurma,
  connectionLoja
};