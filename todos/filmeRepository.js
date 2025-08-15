import { conectionFilme } from "./conection.js";

export async function listarFilme() {
  const comando = `
    SELECT *
      FROM filme
  `
  const [registros] = await conectionFilme.query(comando)
  return registros;
}

export async function consultarFilme(id) {
  const comando = `
    SELECT *
      FROM filme
     WHERE id = ?
  `
  const [registros] = await conectionFilme.query(comando, [id]);
  return registros[0];
}

export async function filtrarFilmePorNome(nome) {
  const comando = `
    SELECT *
      FROM filme
     WHERE titulo like ?
  `
  const [registros] = await conectionFilme.query(comando, [`%${nome}%`]);
  return registros;
}

export async function inserirFilme(Filme) {
  const comando = `
    INSERT INTO filme (titulo, ano_lancamento, genero, duracao_minutos, diretor, avaliacao) 
    values(?,?,?,?,?,?)
  `
  const [info] = await conectionFilme.query(comando, [
    Filme.titulo, 
    Filme.ano_lancamento, 
    Filme.genero, 
    Filme.duracao_minutos, 
    Filme.diretor, 
    Filme.avaliacao
  ])
  return info.insertId;
}

export async function atualizarFilme(id, filme) {
  const comando = `
    UPDATE filme
       SET titulo = ?,
           ano_lancamento = ?,
           genero = ?,
           duracao_minutos = ?,
           diretor = ?,
           avaliacao = ?
     WHERE id = ?
  `
  const [info] = await conectionFilme.query(comando, [
    filme.titulo,
    filme.ano_lancamento,
    filme.genero,
    filme.duracao_minutos,
    filme.diretor,
    filme.avaliacao,
    id
  ]);
  return info.affectedRows;
}

export async function removerFilme(id) {
  const comando = `
    DELETE FROM filme
     WHERE id = ?
  `
  const [info] = await conectionFilme.query(comando, [id]);
  return info.affectedRows;
}